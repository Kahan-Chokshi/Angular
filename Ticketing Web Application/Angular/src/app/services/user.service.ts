import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

  const Admin = 'isAdmin';
  @Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User;
  Users: User[];

  baseURL = 'http://localhost:8080';
  isAdminIn: Boolean = false;
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient) {}
  postUser(U: User) {
    return this.http.post(this.baseURL + '/createUser', U);
  }

  public isAdmin(admin:string) {
    window.localStorage.removeItem(Admin);
    window.localStorage.setItem(Admin, admin);
  }

  getUserList(email?: string, password?: string) {
    return this.http.post(this.baseURL + '/emailAuth', { email, password });
  }
}
