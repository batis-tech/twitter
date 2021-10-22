import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { DataService } from "../../../services/data.service";
import { Tweet } from "../../../services/tweet.model";
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  public isEmojiPickerVisible: boolean;
  public textArea: any = '';
  textarea:any;
  loginForm: FormGroup;
  newUser:any;
  email:any;
  constructor(private afAuth :AngularFireAuth, private firestore :AngularFirestore,private dataService :DataService) {
    this.loginForm = new FormGroup({
            textarea: new FormControl('', [Validators.required,Validators.maxLength(280)])
        })
     }

  ngOnInit(): void {
  }
  public addEmoji(event: any) {
     this.textArea = `${this.textArea}${event.emoji.native}`;
     this.isEmojiPickerVisible = false;
  }

tweets(){
  this.afAuth.authState.subscribe(newUser => {
      console.log('Dashboard: user', newUser);
      if (newUser) {
          let emailLower = newUser.email!.toLowerCase();
          this.newUser = this.firestore.collection('users').doc(emailLower).valueChanges();
          this.email = newUser.email
          console.log(this.email);
          console.log(this.loginForm.value.textarea);
      }
      const tweet = this.loginForm.value.textarea;
      const email = this.email;
      const tweets = new Tweet(tweet,email)
      console.log(tweets);
      this.dataService.submitTweet(tweets).then(result=>{
        console.log(result);
      })
  });

}
}
