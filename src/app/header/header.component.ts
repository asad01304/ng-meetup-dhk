import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/**
* Header component
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  /**
  * logged in user
  */
  public user = null;

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  /**
  * Fetch auth status from firebase
  */
  ngOnInit() {
    this.afAuth.authState
      .subscribe(user => this.user = user);
  }

  /**
  * Logout using firebase
  */
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      window.location.reload();
    });
  }

}
