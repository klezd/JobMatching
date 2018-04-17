import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {
  user: any;
  activity: any;
  owner = false;

  constructor(
      public viewCtrl:ViewController, 
      public navParams: NavParams,
      public storage: Storage) {
    this.activity = this.navParams.get('activity');
    console.log(this.activity);
    this.user = this.storage.get('userlogin');
    console.log(this.activity.belong_to);
    console.log("storage userlogin");
    console.log(this.storage.get('userlogin'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityDetailPage');
  }
  /*if( this.activity.belong_to == this.user) {
    
  }*/
  apply() {

  }

}
