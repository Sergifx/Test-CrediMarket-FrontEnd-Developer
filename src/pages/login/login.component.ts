import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersModel } from '@models/users.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public user: UsersModel;
  @Input() role = false;
  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(8)])
    });
  }
  get email() { return this.login.get('email'); }

  get password() { return this.login.get('password'); }

  onSubmit() {
    if (this.login.valid) {
      this.user = Object.assign([this.email.value, this.password.value, this.role]);
      console.log(this.user);
    }
  }

}
