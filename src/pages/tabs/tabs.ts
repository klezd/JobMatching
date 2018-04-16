import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
  tab1Root = 'IndexPage';
  tab2Root = 'MessagePage';
  tab3Root = 'ActivityPage';
  tab4Root = 'UserPage';
  tab5Root = 'NotificationPage';
  myIndex: number;

  constructor(public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
    console.log(this.myIndex);
  }

}
