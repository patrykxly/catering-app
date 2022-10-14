import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this._authService.isLoggedIn) return true;
    else return this._router.parseUrl('');
  }
  
}
