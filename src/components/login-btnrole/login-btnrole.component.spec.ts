import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBtnroleComponent } from './login-btnrole.component';

describe('LoginBtnroleComponent', () => {
  let component: LoginBtnroleComponent;
  let fixture: ComponentFixture<LoginBtnroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBtnroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBtnroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
