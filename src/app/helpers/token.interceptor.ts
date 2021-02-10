import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,  } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject, combineLatest } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { LoginApiService } from '../features/pages/login-page/login-api.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    debugger;
    const refreshToken = localStorage.getItem('token');
    const transformedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${refreshToken}`)
    });

    return next.handle(transformedReq);
  }
}

// export class TokenInterceptor{}

// export class TokenInterceptor implements HttpInterceptor {
//   private isRefreshing = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

//   constructor(
//     private apiService: LoginApiService
//   ) {}

//   token: string = localStorage.getItem('token');

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//   }



// }
