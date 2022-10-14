import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '@shared/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn!: boolean;

  constructor(private _router: Router, private _auth: AuthService) {
    this.isLoggedIn = this._auth.isLoggedIn;
  }

  ngOnInit(): void {
    this._router.events
      .pipe(
        tap((event) => {
          if (event.constructor.name === 'NavigationEnd') {
            this.isLoggedIn = this._auth.isLoggedIn;
          }
        })
      )
      .subscribe();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this._auth.isLoggedIn = false;
    this._router.navigate(['']);
  }
}
