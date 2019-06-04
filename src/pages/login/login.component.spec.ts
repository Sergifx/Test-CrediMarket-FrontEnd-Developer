import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginBtnroleComponent } from '@components/login-btnrole/login-btnrole.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitButton: DebugElement;
  let buttonAdmin: DebugElement;
  let buttonAgent: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule],
      declarations: [ LoginComponent, LoginBtnroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitButton = fixture.debugElement.query(By.css('.button__submit'));
    buttonAdmin = fixture.debugElement.query(By.css('.role-admin'));
    buttonAgent = fixture.debugElement.query(By.css('.role-agent'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login form invalid when empty', () => {
    expect(component.login.valid).toBeFalsy();
  });

  it('submitButton should be disabled at empty form', () => {
    expect(submitButton.nativeElement.disabled).toBeTruthy();
  });

  it('submitButton should be enabled at valid form', () => {
    component.login.controls.email.setValue('test@test.com');
    component.login.controls.password.setValue('123456789');
    fixture.detectChanges();
    expect(submitButton.nativeElement.disabled).toBeFalsy();
  });

  it('role should start being Agent', () => {
    expect(component.role).toBeFalsy();
  });

  it('buttonAdmin should change role value', () => {
    buttonAdmin.triggerEventHandler('click', null);
    expect(component.role).toBeTruthy();
  });

  it('buttonAgent should revert role value', () => {
    component.role = true;
    buttonAgent.triggerEventHandler('click', null);
    expect(component.role).toBeFalsy();
  });

  it('submitting multiple values', () => {
    expect(component.login.valid).toBeFalsy();

    component.login.controls.email.setValue('test@test.com');
    component.login.controls.password.setValue('123456789');
    expect(component.login.valid).toBeTruthy();

    component.login.controls.email.setValue('@test.com');
    component.login.controls.password.setValue('123456789');
    expect(component.login.valid).toBeFalsy();

    component.login.controls.email.setValue('test@test.com');
    component.login.controls.password.setValue('1234567');
    expect(component.login.valid).toBeFalsy();

  });


});
