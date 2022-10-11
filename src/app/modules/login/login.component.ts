import { Component } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/_shared/_models/userModels';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: UserModel;

  isLoginFailed!: boolean;

  constructor(
    private _usersService: UsersService
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
          console.info(err);
          this.isLoginFailed = true;
          return throwError(() => err);
        }),
        tap((res) => {
          localStorage.setItem('token', res);
          this.isLoginFailed = false;
        })
      )
      .subscribe();
  }
}
