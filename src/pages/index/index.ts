import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Activity } from '../../model/activity.model';
import { User } from '../../model/user.model';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  userLog: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController,
    public storage: Storage,
    private userProvider: UserProvider) {     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  ionViewWillEnter() {
    this.userLog = this.userProvider.getLogUser();
    console.log(Array.isArray(this.userLog));
    console.log(this.userLog);
    
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  showAll(p) {
    this.navCtrl.push('AllActivitiesPage', {pageName: p.toString()});
  }


  // fake info 
  userA: User = {username: 'aaa', name: 'userA', phone: '01234567', email: 'aaa@mail.com', password:'123'};
  userB: User = {username: 'bbb', name: 'userB', phone: '01234567', email: 'bbb@mail.com', password:'123'};  

  activitiesTopSearch: Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 17, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userLog
    },
    {
      title: 'Title 2',
      location: 'Oulu',
      time: 'April 20, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    }
  ]

  activitiesNearMe: Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userA
    },
    {
      title: 'Title 2',
      location: 'Helsinki',
      time: 'April 24, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userA
    }
  ]

  activitiesNewest:Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 25, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    },
    {
      title: 'Title 2',
      location: 'Helsinki',
      time: 'April 25, 2018',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    }
  ]


}
