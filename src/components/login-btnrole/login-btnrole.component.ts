import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-login-btnrole',
  templateUrl: './login-btnrole.component.html',
  styleUrls: ['./login-btnrole.component.scss']
})
export class LoginBtnroleComponent  {
  @Output() roleChanged: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  @Input() role = false;
}
