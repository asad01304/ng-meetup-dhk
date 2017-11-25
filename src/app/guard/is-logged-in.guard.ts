import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

/**
* Logged in status guard
*/
@Injectable()
export class IsLoggedInGuard implements CanActivate {

  /**
  * constructor
  */
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ){ }

  /**
  * Guard canActivate,
  * redirect to login if not loggedIn
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.auth.authState
          .take(1)
          .map(authState => !!authState)
          .do(auth => !auth ? this.router.navigate(['/login']) : true);
  }
}
