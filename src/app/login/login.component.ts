import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn: boolean;
  allowedAction: string;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => {
      this.isLoggedIn = auth ? true : false;
      this.allowedAction = this.isLoggedIn ? 'ログアウト' : 'ログイン';
    });
  }

  switchLoginStatus() {
    if (this.isLoggedIn) {
      this.afAuth.auth.signOut();
    } else {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

}
