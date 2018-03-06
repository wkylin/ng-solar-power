import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq: HttpRequest<any>;
    authReq = req.clone({
      headers: req.headers.set('token', '5yuzn4r764qv6lb015ygpi2ommbvzj0e')
    });
    return next.handle(authReq);
  }
}
