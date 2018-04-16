import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Activity } from '../../model/activity.model';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  activitiesTopSearch: Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    },
    {
      title: 'Title 2',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    }
  ]

  activitiesNearMe: Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    },
    {
      title: 'Title 2',
      location: 'Helsinki',
      time: 'April 24, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    }
  ]

  activitiesNewest:Activity[] = [
    {
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    },
    {
      title: 'Title 2',
      location: 'Helsinki',
      time: 'April 24, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    }
  ]


}
