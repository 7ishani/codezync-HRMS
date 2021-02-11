import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { loginUser, AuthResponse, loginError, UserAuth, userInfo} from '././model/login';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Injectable({
  providedIn: 'root'
})

export class LoginApiService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private alertify: AlertifyService,

        ){
            this.userSubject = new BehaviorSubject<AuthResponse>(null);
            this.user = this.userSubject.asObservable();
    }

    private loggedIn = new BehaviorSubject<boolean>(false);

    baseUrl: string = 'https://auth.patpatride.com/';

    private tokenExpirationTimer: any;
    currentUserData = new BehaviorSubject<UserAuth>(null);
    userInform = new BehaviorSubject(null);

    private userSubject: BehaviorSubject<AuthResponse>;
    public user: Observable<AuthResponse>;

    loginUser: loginUser;
    AuthResponse: AuthResponse;
    responseData:AuthResponse;
    errorResponse: loginError;
    userInformation: userInfo;

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    public get userValue(): AuthResponse {
        return this.userSubject.value;
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
              // this.authenticateUser(res);
              this.storeToken(res);
              this.router.navigate(['/home']);
              this.alertify.success('You have successfully logged!');


            }, error => {
              console.log(error);
              this.alertify.error('Invalid username or password');
            })
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

        let token = localStorage.getItem('token');
        const body = { Token: token};
        const header = new HttpHeaders().set(
            "Authorization", `Bearer ${token}`
        );

        this.http.post<any>(this.baseUrl+'api/auth/logout', body, {headers: header})
            .subscribe(res =>{
                debugger;
                this.removeToken();
                this.router.navigate(['/']);
                console.log(res);
                }, error => {
                    console.log(error);
                }
            );
    }

    callRefreshToken(payload) {
      console.log('refresh');
      debugger;
        let refreshHeader = new HttpHeaders();

        refreshHeader.set("Authorization", `Bearer ${this.getRefreshToken()}`);
        refreshHeader.set('Content-Type', 'application/x-www-form-urlencoded');

        let body = new URLSearchParams();

        body.set('client_id','patpatClientApp' );
        body.set('client_secret','Zx7RpJZRL4HRJhH9wXp5qn33sRLHDSC6BBkk');
        body.set('grant_type','password');
        body.set('Username','+94768061779');
        body.set('Password','123456');

        return this.http.post<AuthResponse>(this.baseUrl+'connect/token',  body.toString(), {
            headers: refreshHeader});
        }

    private getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    private storeToken(AuthResponse:AuthResponse){
        const token = new UserAuth(
      	    AuthResponse.access_token,
      	    AuthResponse.expires_in,
      	    AuthResponse.token_type,
      	    AuthResponse.refresh_token,
        	  AuthResponse.scope,
      	    AuthResponse.SessionId
        );

        debugger;
        console.log("token "+token);
        console.log(AuthResponse.expires_in);

        this.currentUserData.next(token);
        // this.autoLogout(AuthResponse.expires_in);


        localStorage.setItem('userData', JSON.stringify(token));
        // localStorage.setItem('token', JSON.stringify(token.accessToken));
        localStorage.setItem('token', token.accessToken+"********");
        localStorage.setItem('refreshToken', token.refreshToken);
        localStorage.setItem('expiration', AuthResponse.expires_in);
    }

    private removeToken(){
        localStorage.removeItem('userData');
        localStorage.removeItem('username');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('token');
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
