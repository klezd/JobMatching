import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ActivityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {

  activity: any;
  constructor(public viewCtrl:ViewController, 
    public navParams: NavParams) {
    this.activity = this.navParams.get('activity');
    console.log(this.activity);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityDetailPage');
  }

  apply() {
    
  }

}
