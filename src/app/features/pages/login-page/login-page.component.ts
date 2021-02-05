import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginApiService} from './login-api.service';
import { loginUser } from './model/login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // isShown: boolean;

  constructor(private loginApi: LoginApiService,
              private formBuilder: FormBuilder) { }

  loginUser: loginUser;
  loginUserForm: FormGroup;

  client_id: string ='patpatClientApp';
  client_secret: string = 'Zx7RpJZRL4HRJhH9wXp5qn33sRLHDSC6BBkk';
  grant_type: string = 'password';
  responseStr: any;

  ngOnInit(){
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginUserForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  get Username(){
    return this.loginUserForm.get('Username') as FormControl;
  }

  get Password(){
    return this.loginUserForm.get('Password') as FormControl;
  }

  onSubmit(){
      // this.loginApi.userLogin(this.loginUserData());
    this.responseStr = this.loginApi.userLogin();
     console.log(this.responseStr);

  }

  loginUserData(): loginUser{
    debugger;
    // console.log(this.username.value);
    // console.log(this.password.value);
    return this.loginUser = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      grant_type: this.grant_type,
      Username: this.Username.value,
      Password: this.Password.value

    }
  }


}
