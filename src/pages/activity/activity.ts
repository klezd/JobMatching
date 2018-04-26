import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  //give data later, give with same name pls. 
  //TODO
  posts = [{
    activity_info: {title: 'House Keeper',location: 'Oulu',img: 'https://picsum.photos/200',details: 'Keeping house clean for 2 weeks',requirement: 'no requirement',},
    worker_info: {number_of_workers: 1,number_of_applies: 3},                
    period: {from : '12 October 2017',end : '26 October 2017'}, 
    belong_to: 'userA',
    tags: ['keeper', 'cleaning']  
  }, 
  {
    activity_info: {title: 'Cleaner at garage',location: 'Tampere',img: 'https://picsum.photos/200',details: 'Keep the garage clean everyday',requirement: 'cleaning experience at least 1 year',},
    worker_info: {number_of_workers: 1,number_of_applies: 3,},
    period: {from : '12 October 2017',end : '26 October 2017'},
    belong_to: 'userA', 
    tags: ['garage', 'cleaning']  
  }];
  people = [{name: "James Geoger", img: "./assets/imgs/user.png", email: "james.geoger@omegajob.org"}];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  public viewPost(post, owner:boolean, favourite?: boolean) {
    this.modalCtrl.create('ActivityDetailPage', {activity: post, owner: owner, favourite: favourite}).present();
  }

  public viewProfile(person) {
    let profile = this.modalCtrl.create('ViewProfilePage', {userToBeViewed: person});
    profile.present();
  }

}
