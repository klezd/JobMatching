import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Activity } from '../../model/activity.model';
import { User } from '../../model/user.model';

import { Users } from '../../mocks/providers/users';
import { Activities } from '../../mocks/providers/activities';

@IonicPage()
@Component({
  selector: 'page-all-activities',
  templateUrl: 'all-activities.html',
})
export class AllActivitiesPage {
  pageName: string = '';
  activitiesList;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private users: Users,
    private activities: Activities,
    private modalCtrl: ModalController) {
      this.activitiesList = activities.activities;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllActivitiesPage');
    this.pageName = this.navParams.get('pageName');    
  } 

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

 

}
