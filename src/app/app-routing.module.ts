import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./components/landing/landing.component";
import { HomeComponent } from "./components/home/home.component";
import { ExploreComponent } from "./components/home/explore/explore.component";
import { NotificationsComponent } from "./components/home/notifications/notifications.component";
import { ProfileComponent } from "./components/home/profile/profile.component";
import { BookmarksComponent } from "./components/home/bookmarks/bookmarks.component";
import { ListComponent } from "./components/home/list/list.component";
const routes: Routes = [
  {path:'',redirectTo:'landing', pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'explore',component:ExploreComponent},
    {path:'notifications',component:NotificationsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'bookmarks',component:BookmarksComponent},
    {path:'list',component:ListComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
