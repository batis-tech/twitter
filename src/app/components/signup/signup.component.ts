import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from "../../services/data.service";
import { UserData } from "../../services/user.model";
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: NgForm[]=[];
  firebaseErrorMessage: string[]=[];
  newUser:any;

  constructor(private dataService:DataService,private router: Router,public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {
    if (this.dataService.SignIn) {                       // if the user's logged in, navigate them to the dashboard (NOTE: don't use afAuth.currentUser -- it's never null)
            this.router.navigate(['home']);
        }else{
          this.router.navigate(['landing']);
        }
  }
  onSubmit(form: NgForm){
    const data = form.value.userData;
    console.log(data);
    const newUser = new UserData(data.fullname, data.email, data.password);
    console.log(newUser);
    this.dataService.signup(newUser).then((result)=>{
      if (result == null) {
        this.router.navigate(['home']);
        this.dialogRef.close();
      }else if(result.isValid == false){
        this.firebaseErrorMessage = result.message;
        this.dialogRef.close();

      }
    }).catch(()=>{
      console.log('signup went wrong');
    })
  }


}
