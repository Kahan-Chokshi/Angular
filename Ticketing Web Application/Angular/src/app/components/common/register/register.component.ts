import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {

  constructor(readonly userService: UserService) {}

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
    if (form.value._id == '' || form.value._id == null) {
      const mem = {
        next: (res: any) => {
          this.resetForm(form);
          window.location.href = '/login';
        },
        error: (error: any) => {
          console.log(error.error.error);
        }
      };
      this.userService.postUser(form.value).subscribe(mem);
    }
  }
}
