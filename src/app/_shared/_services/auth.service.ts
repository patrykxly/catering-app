import { Injectable } from '@angular/core';
import { UserModel } from '../_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData!: UserModel;

  isLoggedIn: boolean;

  constructor() { 
    this.isLoggedIn = localStorage.getItem('token') !== null;
  }
}
