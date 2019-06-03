import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public role = false;

  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

}
