import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  user: any;
  tab1Root = 'IndexPage';
  tab2Root = 'MessagePage';
  tab3Root = 'ActivityPage';
  tab4Root = 'UserPage';
  tab5Root = 'NotificationPage';
  myIndex: number;

  constructor(public navParams: NavParams) {
    this.user = navParams.data.user;
    this.myIndex = this.navParams.get('index') || 0;
  }
}
