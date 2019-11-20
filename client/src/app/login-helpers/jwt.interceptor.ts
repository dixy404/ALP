import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { tokenName } from '@angular/compiler';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = JSON.parse(localStorage.getItem('token'))

        if (token) {
            console.log('token inter', token)
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                    
                }
            });
        }

        return next.handle(request);
    }
}