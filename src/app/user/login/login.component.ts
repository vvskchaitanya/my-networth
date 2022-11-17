import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';


import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AngularFireAuth, public firestore: FirestoreService,public route:Router) { }

  ngOnInit(): void {
  }

  login() {
    var provider = new auth.GoogleAuthProvider();
    provider.addScope('email');
    this.firestore.loader.show();
    this.auth.signInWithPopup(provider)
      .then((value)=>{
        this.firestore.loader.hide();
        console.log("User Login Success ",value);
        let email=value.user?.email?value.user.email:"";
        this.firestore.toast.success(email,"User Login Success");
        this.route.navigate(['dashboard']);
      })
      .catch((err: any) => {
        this.firestore.loader.hide();
        console.error(err);
        this.handleError(err.code);
      });

  }

  handleError(code:string){
    switch(code){
      case "auth/user-not-found":
        this.firestore.toast.error("User not Found","Login Error");
        break;
      case "auth/wrong-password":
        this.firestore.toast.error("Invalid Password, Please use forgot password","Login Error");
        break;
      case "auth/configuration-not-found":
        this.firestore.toast.error("Configuration not found for authentication","Login Error");
        break;
      default:
        this.firestore.toast.error("Unable to login","Login Error")
        break;
    }
  }
}
