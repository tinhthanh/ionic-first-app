import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authType: string = "login";
  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
   
   }
 
  doLogin() {
    this.navCtrl.setRoot('MenuPage');
  }
  authenticate(user: any ){
    this.doLogin();
  }
}