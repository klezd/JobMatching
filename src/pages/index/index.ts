import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Activity } from '../../model/activity.model';
import { User } from '../../model/user.model';
import { UserProvider } from '../../providers/user/user';

import { Users } from '../../mocks/providers/users';
import { Activities } from '../../mocks/providers/activities';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  userLogin : User;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController,
    public storage: Storage,
    public event: Events,
    private userProvider: UserProvider,
    private activities: Activities) {       
      this.userLogin = navParams.data;    
      console.log(this.activitiesInd);
      console.log(this.activitiesInd[0]);
      console.log(this.activitiesInd[0].activity_info);
      console.log(this.activitiesInd[0].belong_to);
      console.log(this.activitiesInd[0].period);
      console.log(this.activitiesInd[0].worker_info);      
  }
  activitiesInd: Activity[] = this.activities.activities;
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    console.log(this.userLogin);
  }

  ionViewWillEnter() {
    //this.userLogin = this.navParams.get('userLogin');
    
  }

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  showAll(p) {
    this.navCtrl.push('AllActivitiesPage', {pageName: p.toString()});
  }


  

 
}
