import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-activities',
  templateUrl: 'all-activities.html',
})
export class AllActivitiesPage {
  pageName: string = '';
  postList: any[];
     //TODO
  activitiesList = [
    {
        activity_info: {
            title: 'House Keeper',
            location: 'Oulu',
            img: 'https://picsum.photos/200',
            details: 'Keeping house clean for 2 weeks',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },                
        period: { 
            from : '12 October 2017',
            end : '26 October 2017'
        }, 
        belong_to: 'userA',
        tags: ['keeper', 'cleaning']  
    }, 
    {
        activity_info: {
            title: 'Cleaner at garage',
            location: 'Tampere',
            img: 'https://picsum.photos/200',
            details: 'Keep the garage clean everyday',
            requirement: 'cleaning experience at least 1 year',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },
        period: { 
            from : '12 October 2017',
            end : '26 October 2017'
        },
        belong_to: 'userA', 
        tags: ['garage', 'cleaning']  
    },   
    {
        activity_info: {
            title: 'Design logo for a startup company',
            location: 'Oulu',
            img: 'https://picsum.photos/200',
            details: 'Design logo for a new startup',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 0,
        },
        belong_to: 'userB',
        period: { 
            from : '20 April 2018',
            end : '1 May 2018'
        }, 
        tags: ['design', 'logo', 'startup']  
    },    
  ];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.pageName = this.navParams.get('pageName');  
    this.postList = this.navParams.get('activityList')  
  } 

  openDetails(activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }
}
