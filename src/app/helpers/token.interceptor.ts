import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,  } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { LoginApiService } from '../features/pages/login-page/login-api.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

	jwtHelper = new JwtHelperService();

  	constructor(private apiService: LoginApiService){}

  	intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
   	 	debugger;
    	const access_token = localStorage.getItem('accessToken');

    	if(access_token){
      		const expiration = localStorage.getItem('expiration');

      		if(Date.now()< Number(expiration) * 1000){
          		const transformedReq = req.clone({
         			 headers: req.headers.set('Authorization', `Bearer ${access_token}`)
        		});
        		return next.handle(transformedReq);
     		}

      		const payload = {
        		access_token: access_token,
        		refresh_token: localStorage.getItem('refreshToken')
      		};

      		return this.apiService.callRefreshToken(payload).pipe(
        		switchMap((newTokens: any) => {
          			localStorage.setItem('accessToken', newTokens.access_token);
          			localStorage.setItem('refreshToken', newTokens.refresh_token);
          			const decodeUser = this.jwtHelper.decodeToken(
            			newTokens.access_token
          			);

          			localStorage.setItem('expiration', decodeUser.expires_in);
          			this.apiService.userInform.next(decodeUser);
          			const transformedReq = req.clone({
              			headers: req.headers.set('Authorization', `Bearer ${newTokens.access_token}`
           	 			),
          			});
          			return next.handle(transformedReq);
        		})
      		);
      	}
      	else{
        	return next.handle(req);
      	}
    }
}
    // const refreshToken = localStorage.getItem('token');
    // const transformedReq = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${refreshToken}`)
    // });

    // return next.handle(transformedReq);
