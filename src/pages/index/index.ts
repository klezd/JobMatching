import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Job } from '../../models/job';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
    //user login to the system
  userLogin: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController,
    public storage: Storage,
    public event: Events) {  
      //delete if not needed (used to get the user login to system from signup.ts and login.ts)     
      this.userLogin = navParams.data;    
  }

  //fake data TODO
  posts : Job [] = this.getPosts();

  //TODO get posts from service

  getPosts() {
      return [
        {title: 'I need a supervisor for HTML project',  location: 'Oulu', dateStart: new Date('01 Apr 2018'), dateEnd: new Date('01 May 2018'), require: 'Master degree', imgUrl: './assets/imgs/post_images/babysitting.jpg'},
        {title: 'I need a supervisor for HTML project',  location: 'Oulu', dateStart: new Date('01 Apr 2018'), dateEnd: new Date('01 May 2018'), require: 'Master degree', imgUrl: './assets/imgs/post_images/babysitting.jpg'},
        ];
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    console.log(this.navCtrl.getActiveChildNavs);
    console.log(this.navCtrl.getActiveChildNav);
  }

  openDetails(activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  showAll(p) {
    this.navCtrl.push('AllActivitiesPage', {pageName: p.toString(), activityList: this.posts});
  } 

  searchJob(){
    this.navCtrl.push('looking-for-a-job');
  }
}
