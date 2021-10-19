import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./components/landing/landing.component";
import { HomeComponent } from "./components/home/home.component";
const routes: Routes = [
  {path:'',redirectTo:'landing', pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
