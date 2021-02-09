import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
import { LoginApiService } from 'src/app/features/pages/login-page/login-api.service';

@Component({
  selector: 'app-dropdown-user',
  templateUrl: './dropdown-user.component.html',
  styleUrls: ['./dropdown-user.component.css']
})
export class DropdownUserComponent implements OnInit {
  user = APP_CONFIG.user;
  avatar = APP_CONFIG.avatar;
  username: string;

  constructor(
    private apiService: LoginApiService
  ) { }

  ngOnInit(): void {
    this.apiService.userInfo();
    this.username = localStorage.getItem('username');
    console.log("username: "+this.username);
  }

  logout(){
   this.apiService.userLogout();
  }
}
