import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Activity } from '../../model/activity.model';
/**
 * Generated class for the AllActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  activities: Activity[] = [
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
      title: 'Title 1',
      location: 'Oulu',
      time: 'April 19, 2017',
      img: 'https://picsum.photos/200',
      details: 'blah blah',
      number_of_workers: 1,
      requirement: 'requirement'
    },
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
  ];

  openDetails(activity: Activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

}
