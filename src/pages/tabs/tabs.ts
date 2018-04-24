import { Component, ViewChild, ElementRef, ContentChild, ViewChildren } from '@angular/core';
import { IonicPage, NavParams, Tabs, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  user: any;
  tab1Root = 'IndexPage';
  tab2Root = 'MessagePage';
  tab3Root = 'ActivityPage';
  tab4Root = 'UserPage';
  tab5Root = 'NotificationPage';
  myIndex: any;
  folder = "fa-folder";

  @ViewChild('tab2') tab2: Tabs;
  @ViewChildren('tab2') tabs2: Tabs;
  @ContentChild('tab2') tab2s: Tabs;
  ionViewDidEnter() {
  }

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.user = navParams.data.user;
    if(this.myIndex == 1) {
      this.folder = "fa-folder-open"
    } else {
      this.folder = "fa-folder"
    }
  }
  changeIcon() {
    this.folder = "fa-folder-open"
  }

  tabInfo(tab) {
    this.folder = "fa-folder";
    tab.goToRoot();
  }
}
