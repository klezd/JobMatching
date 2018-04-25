import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  //fake data
  activitiesNewest = [
    {
        activity_info: {
            title: 'Babysitter',
            location: 'Oulu',
            img: './assets/imgs/post_images/babysitting.jpg',
            details: 'Take care of 2 children for 2 weeks',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },                
        period: { 
            from : '1 May 2018',
            end : '26 May 2017'
        }, 
        belong_to: 'Maria',
        tags: ['babysitter']  
    }, 
    {
        activity_info: {
            title: 'Cleaner for summer',
            location: 'Tampere',
            img: './assets/imgs/post_images/cleaning.jpg',
            details: 'Keep the garage clean everyday',
            requirement: 'cleaning experience at least 1 year',
        },
        worker_info: {
            number_of_workers: 5,
            number_of_applies: 3,
        },
        period: { 
            from : '12 May 2018',
            end : '26 August 2018'
        },
        belong_to: 'John', 
        tags: ['summer', 'cleaning']  
    },   
    {
        activity_info: {
            title: 'Web designer for a new startup',
            location: 'Helsinki',
            img: 'https://picsum.photos/200',
            details: 'Design website for a new startup',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 0,
        },
        belong_to: 'Chill',
        period: { 
            from : '20 April 2018',
            end : '1 June 2018'
        }, 
        tags: ['design', 'website', 'startup']  
    },    
  ];

  activitiesTopSearch = [
    {
        activity_info: {
            title: 'House Keeper',
            location: 'Oulu',
            img: './assets/post_images/babysitting.jpg',
            details: 'Keeping house clean for 2 weeks',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },                
        period: { 
            from : '12 Apr 2018',
            end : '26 May 2018'
        }, 
        belong_to: 'Sienna',
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
        belong_to: 'Robert', 
        tags: ['garage', 'cleaning']  
    },   
    {
        activity_info: {
            title: 'Design logo for a startup company',
            location: 'Helsinki',
            img: 'https://picsum.photos/200',
            details: 'Design logo for a new startup',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 0,
        },
        belong_to: 'Geogre',
        period: { 
            from : '20 April 2018',
            end : '1 May 2018'
        }, 
        tags: ['design', 'logo', 'startup']  
    },    
  ];

  activitiesNear = [
    {
        activity_info: {
            title: 'Cat take-carer',
            location: 'Oulu',
            img: './assets/imgs/post_images/babysitting.jpg',
            details: 'I need someone to take care of my cat for 2 days',
            requirement: 'no requirement',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },                
        period: { 
            from : '27 April 2018',
            end : '29 April 2018'
        }, 
        belong_to: 'Matt',
        tags: ['keeper', 'pet']  
    }, 
    {
        activity_info: {
            title: 'Cleaner at garage',
            location: 'Oulu',
            img: 'https://picsum.photos/200',
            details: 'Keep the garage clean everyday',
            requirement: 'cleaning experience at least 1 year',
        },
        worker_info: {
            number_of_workers: 1,
            number_of_applies: 3,
        },
        period: { 
            from : '10 April 2018',
            end : '10 May 2018'
        },
        belong_to: 'John', 
        tags: ['garage', 'cleaning']  
    },   
    {
        activity_info: {
            title: 'Design logo for website',
            location: 'Oulu',
            img: 'https://picsum.photos/200',
            details: 'Design logo for a new startup',
            requirement: 'Photoshop, Design tool',
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

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    console.log(this.navCtrl.getActiveChildNavs);
    console.log(this.navCtrl.getActiveChildNav);
  }

  openDetails(activity) {
    this.modalCtrl.create('ActivityDetailPage', {activity: activity}).present();
  }

  showAll(p) {
    this.navCtrl.push('AllActivitiesPage', {pageName: p.toString()});
  } 

  searchJob(){
    this.navCtrl.push('looking-for-a-job');
  }
}
