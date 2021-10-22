import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SignIn: boolean;
  tweets:any[]=[];

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.SignIn = false;
    this.afAuth.onAuthStateChanged((newUser) => {
      if (newUser) {
        this.SignIn = true;
      } else {
        this.SignIn = false
      }
    });
  }

  signup(newUser: any): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(newUser.email, newUser.password).then((result) => {
      let emailLower = newUser.email.toLowerCase();
      this.afs.doc('/users/' + emailLower).set({
        accountType: 'endUser',
        fullname: newUser.fullname,
        fullname_lower: newUser.fullname.toLowerCase(),
        email: newUser.email,
        email_lower: emailLower
      });
    })
      .catch(error => {
        console.log('Auth Service: signup error', error);
        if (!error.code) {
          return { isValid: false, message: error.message }
        } else {
          return null
        }
      })
  }
  logoutUser(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        this.router.navigate(['landing']);                    // when we log the user out, navigate them to home
      })
    // .catch(error => {
    //     console.log('Auth Service: logout error...');
    //     console.log('error code', error.code);
    //     console.log('error', error);
    //     if (error.code)
    //         return error;
    // });
  }
  submitTweet(tweets:any){
    return this.afs.collection('/tweets/').add({
      tweet: tweets.tweet,
      email: tweets.email,
    });
         console.log(tweets);
}
}
