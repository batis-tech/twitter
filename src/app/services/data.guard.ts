import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/compat/auth";
@Injectable({
  providedIn: 'root'
})
export class DataGuard implements CanActivate {
  constructor(private router :Router, private afAuth :AngularFireAuth){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise ((resolve ,reject)=>{
      this.afAuth.onAuthStateChanged((newUser)=>{
        if (newUser) {
          resolve(true);
        }else{
        console.log('guard file, you arre not loged in');
        this.router.navigate(['landing']);
        resolve(false);
      }
      })
    })
  }

}
