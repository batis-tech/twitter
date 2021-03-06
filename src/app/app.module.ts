import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from "@angular/common/http";

import { environment } from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/home/header/header.component';
import { SiderightComponent } from './components/home/sideright/sideright.component';
import { SideleftComponent } from './components/home/sideleft/sideleft.component';
import { TweetsComponent } from './components/home/tweets/tweets.component';
import { TweetComponent } from './components/home/tweet/tweet.component';

import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ExploreComponent } from './components/home/explore/explore.component';

import { MatTabsModule } from '@angular/material/tabs';
import { NotificationsComponent } from './components/home/notifications/notifications.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { BookmarksComponent } from './components/home/bookmarks/bookmarks.component';
import { ListComponent } from './components/home/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    SiderightComponent,
    SideleftComponent,
    TweetsComponent,
    TweetComponent,
    ExploreComponent,
    NotificationsComponent,
    ProfileComponent,
    BookmarksComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),????// imports firebase/app needed for everything
    AngularFirestoreModule,??
    AngularFireDatabaseModule,??// imports firebase/firestore, only needed for database features
    // AngularFireStorageModule,                               // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    HttpClientModule,
    PickerModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
