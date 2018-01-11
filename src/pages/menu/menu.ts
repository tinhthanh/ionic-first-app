
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Login | Register', pageName: 'TabsPage', tabComponent: 'TabsPage', index: 0, icon: 'ios-person' },
    { title: 'Category', pageName: 'TabsPage', tabComponent: 'CategoryPage', index: 1, icon: 'ios-pricetag-outline' },
    { title: 'Customer Service', pageName: 'RegisterPage', icon: 'ios-pizza-outline' },
    { title: 'Log out', pageName: 'LoginPage', icon: 'ios-log-out' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    // let params = {};
 
    // // The index is equal to the order of our tabs inside tabs.ts
    // if (page.index) {
    //   params = { tabIndex: page.index };
    // }
 
    // // The active child nav is our Tabs Navigation
    // if (this.nav.getActiveChildNav() && page.index != undefined) {
    //   this.nav.getActiveChildNav().select(page.index);
    // } else {
    //   // Tabs are not active, so reset the root page 
    //   // In this case: moving to or from SpecialPage
    //   this.nav.setRoot(page.pageName, params);
    // }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    // let childNav = this.nav.getActiveChildNav();
 
    // if (childNav) {
    //   if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
    //     return 'primary';
    //   }
    //   return;
    // }
 
    // // Fallback needed when there is no active childnav (tabs not active)
    // if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
    //   return 'primary';
    // }
    return;
  }
 
}