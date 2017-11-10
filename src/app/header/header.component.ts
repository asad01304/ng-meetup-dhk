import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  public user = null;

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.afAuth.authState
      .subscribe(user => this.user = user);
  }

  logout(){
    this.afAuth.auth.signOut().then(()=>{
      window.location.reload();
    });
  }

}
