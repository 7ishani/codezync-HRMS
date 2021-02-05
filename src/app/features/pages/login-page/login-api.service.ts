import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { loginUser, AuthResponse} from '././model/login';
import { Observable } from 'rxjs';
// import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://auth.patpatride.com/connect/token';
  loginUser: loginUser;

  client_id:string;
  client_secret:string;
  grant_type:string;
  Username: string;
  Password: string;

  // headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });


  // userLogin(loginUser: loginUser){

  // // let options = {
  // //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  // // };
  // debugger;
  //   this.http.post(this.baseUrl,loginUser,{
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  // }
  //       ).subscribe(res =>{
  //       console.log(res);
  //     },error => {
  //       debugger;
  //       console.log('error');
  //       console.log(error);
  //     });
  // }

  userLogin(){
    return this.http.post<any>(this.baseUrl,
      {
        client_id: 'patpatClientApp',
        client_secret: 'Zx7RpJZRL4HRJhH9wXp5qn33sRLHDSC6BBkk',
        grant_type: 'password',
        Username: '+94768061779',
        Password: '123456',

      },{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        }).subscribe(res =>{
        debugger;
        console.log('res');
        console.log(res);
      }, error => {
        console.log(error);
      })
  }

  // userLogin(){
  //   const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  //   let body = new HttpParams();

  //   body = body.set('client_id','patpatClientApp' );
  //   body = body.set('client_secret','Zx7RpJZRL4HRJhH9wXp5qn33sRLHDSC6BBkk');
  //   body = body.set('grant_type','password');
  //   body = body.set('Username','+94768061779');
  //   body = body.set('Password','123456');

  //   return this.http.post<AuthResponse>(this.baseUrl,  body, {
  //     headers: myheader}).subscribe(res =>{
  //             debugger;
  //             console.log('res');
  //             console.log(res);
  //           }, error => {
  //             console.log(error);
  //           })

  // }
}
