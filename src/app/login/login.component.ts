import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
* Login component
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  /**
  * constructor
  */
  constructor(
    public afAuth: AngularFireAuth
  ) {}

  /**
  * Login using firebase google
  */
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
  * Logout from firebase google
  */
  logout() {
    this.afAuth.auth.signOut();
  }
}
