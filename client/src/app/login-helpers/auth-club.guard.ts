import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import { AuthenticationClubService } from '../services/authentication-club.service';



@Injectable({ providedIn: 'root' })
export class AuthclubGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationclubService: AuthenticationClubService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('token')

        console.log(token)
        const currentUser = jwt_decode(token)

        // console.log("current user", currentUser)
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}