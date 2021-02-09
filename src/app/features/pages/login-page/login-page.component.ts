import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { LoginApiService} from './login-api.service';
import { AuthResponse, loginUser } from './model/login';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // isShown: boolean;

  constructor(private loginApi: LoginApiService,
              private formBuilder: FormBuilder,
              private alertify: AlertifyService) { }

  loginUser: loginUser;
  loginUserForm: FormGroup;
  userSubmitted: boolean;

  client_id: string ='patpatClientApp';
  client_secret: string = 'Zx7RpJZRL4HRJhH9wXp5qn33sRLHDSC6BBkk';
  grant_type: string = 'password';
  response: AuthResponse;

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
    if(this.loginUserForm.valid){
      this.userSubmitted = false;
      this.loginApi.userLogin(this.loginUserData());
    }

    else{
      this.alertify.error('Please fill the required fields!');
    }

  }

  loginUserData(): loginUser{
    // debugger;
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
