import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/_shared/_models/userModel';
import { AuthService } from 'src/app/_shared/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: UserModel;

  isLoginFailed!: boolean;

  constructor(
    private _usersService: UsersService,
    private _router: Router,
    private _auth: AuthService
  ) {
    this.user = {
      email: '',
      password: '',
    };
  }

  login(): void {
    this._usersService
      .login(this.user)
      .pipe(
        catchError((err) => {
          this.isLoginFailed = true;
          return throwError(() => err);
        }),
        tap((res: UserModel) => this.afterLoginSuccess(res))
      )
      .subscribe();
  }

  private afterLoginSuccess(data: UserModel) {
    localStorage.setItem('token', data.verificationToken as string);
    this._auth.isLoggedIn = true;
    this._auth.userData = {
      firstname: data.firstname,
      email: data.email,
    };
    this.isLoginFailed = false;
    this._router.navigate(['']);
  }
}
