import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenStorageService } from '../../../services/tokenStorage.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(
    readonly userService: UserService,
    public tokenStorage: TokenStorageService,
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    this.userService.selectedUser = {
      _id: '',
      Email: '',
      Password: '',
      Name: '',
      IsAdmin: false,
      Tickets: '',
      CreatedAt: '',
      UpdatedAt: '',
    };

    if (form) {
      form.reset();
    }
  }

  onSubmit(form: NgForm) {
    const { Email, Password } = form.value;
    this.userService.getUserList(Email, Password).subscribe({
      next: (data: any) => {
        this.tokenStorage.saveToken(data.token);
        if (data.isAdmin == true) {
          this.userService.isAdmin("true");
          window.location.href = '/admin/buses';
          localStorage.setItem('isAdmin', '' + true);
          setTimeout(() => {
            localStorage.removeItem('authToken');
          }, 3600000);
        } else {
          window.location.href = '/user/search';
          setTimeout(() => {
            localStorage.removeItem('authToken');
          }, 3600000);
        }
      },
    });
  }
}
