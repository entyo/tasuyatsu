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
     this.isLoggedIn = firebase.auth().currentUser ? true : false;
     this.allowedAction = this.isLoggedIn ? "ログアウト" : "ログイン"
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(() => {
      this.isLoggedIn = true;
      this.allowedAction = "ログアウト";
    }, () => {
      console.log("login failed...");
    });
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(() => {
      this.isLoggedIn =  false;
      this.allowedAction = "ログイン";
    }, () => {
      console.log("logout failed...");
    });
  }

  switchLoginStatus() {
    if (this.isLoggedIn) {
      this.logout();
    } else {
      this.login();
    }
  }
  
}
