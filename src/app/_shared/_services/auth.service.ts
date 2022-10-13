import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor() { 
    this.isLoggedIn = localStorage.getItem('token') !== null;
  }
}
