import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/_shared/_models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup!: FormGroup<any>;

  areAllFieldsFilled: boolean = true;

  isRegistrationFailed: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _usersService: UsersService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      mailCtrl: ['', Validators.required],
      passwordCtrl: ['', [Validators.required, this.passwordValidator()]],
      repeatPasswordCtrl: ['', Validators.required],
    });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      const isPasswordCorrect = control.touched
        ? regex.test(control.value)
        : true;
      return !isPasswordCorrect
        ? { incorrectPassword: { value: control.value } }
        : null;
    };
  }

  register(): void {
    if (!this.checkIfAreAllFieldsFilled()) return;
    const newUser: UserModel = this.createNewUser();
    this._usersService
      .register(newUser)
      .pipe(
        catchError((err) => {
          this.isRegistrationFailed = true;
          return throwError(() => err);
        }),
        tap(() => {
          this.isRegistrationFailed = false;
          this._router.navigate(['login']);
          this.openSnackBar();
        })
      )
      .subscribe();
  }

  private checkIfAreAllFieldsFilled(): boolean {
    if (
      Object.keys(this.registerFormGroup.controls).find(
        (key) => this.registerFormGroup?.get(key)?.errors?.['required']
      )
    ) {
      this.areAllFieldsFilled = false;
      return false;
    }
    return true;
  }

  private createNewUser(): UserModel {
    return {
      firstname: this.registerFormGroup.controls['nameCtrl'].value as string,
      email: this.registerFormGroup.controls['mailCtrl'].value as string,
      password: this.registerFormGroup.controls['passwordCtrl'].value as string,
      confirmPassword: this.registerFormGroup.controls['repeatPasswordCtrl']
        .value as string,
    };
  }

  private openSnackBar(): void {
    this._snackBar.open('You can now log in!', 'Close', {
      duration: 3000,
      panelClass: ['custom-snackbar'],
    });
  }
}
