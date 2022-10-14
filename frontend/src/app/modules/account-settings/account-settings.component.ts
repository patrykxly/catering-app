import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { UsersService } from '@services/users.service';
import { ConfirmDialogComponent } from '@shared/_components/confirm-dialog/confirm-dialog.component';
import { UserModel } from '@shared/_models/userModel';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  userData!: FormGroup<any>;

  isPasswordWeak: boolean = false;

  passwordsDoNotMatch: boolean = false;

  initialName!: string;

  isDataChanged!: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _userService: UsersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const userCredentials: UserModel = JSON.parse(
      localStorage.getItem('current user') as string
    );
    this.userData = this._formBuilder.group({
      email: [{ value: userCredentials.email, disabled: true }],
      firstname: [userCredentials.firstname, Validators.required],
      password: [''],
      confirmPassword: [''],
    });
    this.initialName = userCredentials.firstname as string;
  }

  onSubmit(): void {
    this.isDataChanged = true;
    this.setPasswordBooleans();
    if (this.dataHasChanged() && this.arePasswordsValid()) {
      this.openConfirmDialog();
    } else if (this.dataHasChanged()){
      this.isDataChanged = true;
    }
    else{
      this.isDataChanged = false;
    }
  }

  private isPasswordCorrect(): boolean {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password = this.userData.get('password');
    return regex.test(password?.value);
  }

  private arePasswordsMatching(): boolean {
    return (
      this.userData.get('password')?.value ===
      this.userData.get('confirmPassword')?.value
    );
  }

  private setPasswordBooleans(): void {
    const password = this.userData.get('password');
    if (password?.touched && password.value !== '') {
      this.isPasswordWeak = !this.isPasswordCorrect();
      this.passwordsDoNotMatch = !this.arePasswordsMatching();
    }
  }

  private arePasswordsValid(): boolean {
    return !this.isPasswordWeak && !this.passwordsDoNotMatch;
  }

  private dataHasChanged(): boolean {
    return (
      this.userData.get('password')?.value !== '' ||
      this.initialName !== this.userData.get('firstname')?.value
    );
  }

  private openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'change your credentials',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.info('Detail dialog closed');
      if (result) {
        this.modifyUserCredentials();
      }
    });
  }

  private modifyUserCredentials(): void {
    const modifiedUser: UserModel = {
      email: this.userData.get('email')?.value,
      firstname: this.userData.get('firstname')?.value,
      password: this.userData.get('password')?.value,
      confirmPassword: this.userData.get('confirmPassword')?.value,
    };
    this._userService.modifyCredentials(modifiedUser).pipe(
      tap((res: UserModel) => {
        localStorage.removeItem('current user');
        localStorage.setItem('current user', JSON.stringify(res));
        this.openSnackBar();
      })
    ).subscribe();
  }

  private openSnackBar(): void {
    this._snackBar.open('Credentials have been changed.', 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar'],
    });
  }
}
