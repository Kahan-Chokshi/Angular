import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/tokenStorage.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService],
})
export class NavbarComponent implements OnInit {
  constructor(
    readonly userService: UserService,
    readonly tokenService: TokenStorageService
  ) {}

  ngOnInit() {
    this.userService.isLoggedIn = window.localStorage.getItem('authToken')
      ? true
      : false;
    this.userService.isAdminIn = window.localStorage.getItem('isAdmin') !== null
      ? true
      : false;
  }

  signOut() {
    this.tokenService.signOut();
    window.location.href = '/login';
  }
}
