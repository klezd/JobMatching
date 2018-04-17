import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Activity } from '../../model/activity.model';
import { User } from '../../model/user.model';

@IonicPage()
@Component({
  selector: 'page-all-activities',
  templateUrl: 'all-activities.html',
})
export class AllActivitiesPage {
  pageName: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllActivitiesPage');
    this.pageName = this.navParams.get('pageName');    
  } 

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  userA: User = {username: 'aaa', name: 'userA', phone: '01234567', email: 'aaa@mail.com', password:'123'};
  userB: User = {username: 'bbb', name: 'userB', phone: '01234567', email: 'bbb@mail.com', password:'123'};

  activities: Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    },
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    },
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userB
    },
    {
      title: 'Title 2',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      number_of_applies: 2,
      requirement: 'requirement',
      belong_to: this.userA
    }
  ];

}
