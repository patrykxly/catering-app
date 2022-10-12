import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../_shared/_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly _url = "https://localhost:7166/api/Auth"

  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<string> {
    return this.http.post<string>(`${this._url}/register`, user);
  }

  login(user: UserModel): Observable<UserModel> {
    return this.http.post(`${this._url}/login`, user);
  }
}
