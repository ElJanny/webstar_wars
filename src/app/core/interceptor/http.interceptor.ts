import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/api/auth.service';

@Injectable()
export class HttpIntercept implements HttpInterceptor {

  constructor(private router: Router,
              private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.getAuthToken() !== null){
      const token: string = "Bearer "+this.authService.getAuthToken();
      return next.handle(request.clone({headers: request.headers.set('Application-Authorization', token)}));
    }
    return next.handle(request);
  }
}
