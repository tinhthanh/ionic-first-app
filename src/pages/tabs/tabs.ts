import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
   tab1Root = 'CategoryPage';
   tab2Root = 'OrderNumberPage';
   tab3Root = 'UserProfilePage';
   tab4Root = 'NotificationsPage';
   indexPage: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.indexPage = navParams.data.tabIndex || 0;
  }

  // ionViewDidLoad() {
  //   this.tabRef.select(this.navParams.data.tabIndex || 0);
    
  // }

}
