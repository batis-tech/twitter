import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
loginForm: FormGroup;
  constructor(private dataService: DataService, private router: Router, private afAuth: AngularFireAuth,public dialogRef: MatDialogRef<SigninComponent>) {
    this.loginForm = new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }
  loginUser() {
                              // show the progress indicator as we start the Firebase login process

      if (this.loginForm.invalid)
          return;

      this.dataService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
                           // no matter what, when the auth service returns, we hide the progress indicator
          if (result == null) {                               // null is success, false means there was an error
              console.log('logging in...');
              this.router.navigate(['/home']);
              this.dialogRef.close();
          }
          else if (result.isValid == false) {
              console.log('login error', result);

          }
      });
  }
}
