import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/_shared/_models/userModels';
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
      Email: '',
      Password: '',
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
        tap((res) => {
          this._auth.isLoggedIn = true;
          localStorage.setItem('token', res);
          this._router.navigate(['']);
          this.isLoginFailed = false;
        })
      )
      .subscribe();
  }
}
