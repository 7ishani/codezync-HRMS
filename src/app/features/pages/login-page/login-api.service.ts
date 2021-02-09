import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { loginUser, AuthResponse, loginError, UserAuth, userInfo} from '././model/login';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Injectable({
  providedIn: 'root'
})

export class LoginApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertify: AlertifyService
  ) { }

  private loggedIn = new BehaviorSubject<boolean>(false);

  baseUrl: string = 'https://auth.patpatride.com/';

  private tokenExpirationTimer: any;
  currentUserData = new BehaviorSubject<UserAuth>(null);

  loginUser: loginUser;
  AuthResponse: AuthResponse;
  responseData:AuthResponse;
  errorResponse: loginError;
  userInformation: userInfo;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  //login
  userLogin(loginUser: loginUser){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new URLSearchParams();

    body.set('client_id',loginUser.client_id );
    body.set('client_secret',loginUser.client_secret);
    body.set('grant_type',loginUser.grant_type);
    body.set('Username',loginUser.Username);
    body.set('Password',loginUser.Password);

    debugger;
    return this.http.post<AuthResponse>(this.baseUrl+'connect/token',  body.toString(), {
      headers: myheader}).subscribe(res =>{
              // debugger;
              console.log(res);
              this.authenticateUser(res);
              this.router.navigate(['/home']);
              this.alertify.success('You have successfully logged!')

            }, error => {
              console.log(error);
              this.alertify.error('Invalid username or password');
            })
  }

authenticateUser(AuthResponse:AuthResponse){
  debugger;

    const user = new UserAuth(
      	AuthResponse.access_token,
      	AuthResponse.expires_in,
      	AuthResponse.token_type,
      	AuthResponse.refresh_token,
      	AuthResponse.scope,
      	AuthResponse.SessionId
    );

    console.log(user);
    this.currentUserData.next(user);
    // this.autoLogout(AuthResponse.expires_in);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
    }, expirationDuration);
  }

  autoLogin(){
    const userData: {
      access_token:  string;
      expires_in:    number;
      token_type:    string;
      refresh_token: string;
      scope:         string;
      SessionId:     string;
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData){
      return;
    }

    const returningUser = new UserAuth(
      userData.access_token,
      userData.expires_in,
      userData.token_type,
      userData.refresh_token,
      userData.scope,
      userData.SessionId
    )

    if (returningUser.accessToken) {
      this.currentUserData.next(returningUser);
      const expirationDuration =
          new Date(userData.expires_in).getTime() -
          new Date().getTime();
      this.autoLogout(expirationDuration);
      return true;
  }
  }

  logout(){
    localStorage.removeItem('userData');
        this.router.navigate(['/']);
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
  }

  //user logout
  userLogout(){
    debugger;

    let token = JSON.parse(localStorage.getItem('userData'));
    const body = { Token: token.access_token};
    const header = new HttpHeaders().set(
      "Authorization", `Bearer ${token.access_token}`
    );

     this.http.post<any>(this.baseUrl+'api/auth/logout', body, {headers: header})
     .subscribe(res =>{
        debugger;
        localStorage.removeItem('userData');
        this.router.navigate(['/']);
        console.log(res);
      }, error => {
        console.log(error);
      }
     );
    }

  userInfo(){
    debugger;

    let token = JSON.parse(localStorage.getItem('userData'));
    const header = new HttpHeaders().set(
      "Authorization", `Bearer ${token.access_token}`
    );

    this.http.post<userInfo>(this.baseUrl+'connect/userinfo', null, {headers: header})
      .subscribe(res =>{
        debugger;
        this.userInformation = res;
        console.log("userInfo "+this.userInformation.name);
        localStorage.setItem('username', this.userInformation.name)
        console.log(res);
      }), error => {
        console.log(error);
      }
  }
}
