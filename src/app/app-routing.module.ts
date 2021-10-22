import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./components/landing/landing.component";
import { HomeComponent } from "./components/home/home.component";
import { ExploreComponent } from "./components/home/explore/explore.component";
const routes: Routes = [
  {path:'',redirectTo:'landing', pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'home',component:HomeComponent,children:[
    {path:'explore',component:ExploreComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
