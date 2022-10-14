import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { UsersService } from '@services/users.service';
import { UserModel } from '@shared/_models/userModel';
import { AuthService } from '@shared/_services/auth.service';

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
    const user: UserModel = {
      email: data.email,
      firstname: data.firstname
    };
    localStorage.setItem('current user', JSON.stringify(user));
    localStorage.setItem('token', data.verificationToken as string);
    this._auth.isLoggedIn = true;
    this.isLoginFailed = false;
    this._router.navigate(['']);
  }
}
