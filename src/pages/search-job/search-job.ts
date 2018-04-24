import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'looking-for-a-job',
  segment: 'looking-for-a-job',
})
@Component({
  selector: 'page-search',
  templateUrl: 'search-job.html',
})
export class SearchJob {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  ionViewWillEnter() {
    
  }
  /**
   * set result to display result after search (search with result at the same page)
   */
  result = false;
  searchJob() {
    
  }

}
