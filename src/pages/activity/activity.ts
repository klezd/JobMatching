import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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
  posts = [       
    {title: 'I need a supervisor for HTML project',  location: 'Oulu', dateStart: new Date('01 Apr 2018'), dateEnd: new Date('01 May 2018'), require: 'Master degree', imgUrl: './assets/imgs/post_images/babysitting.jpg'},
    {title: 'I need a supervisor for HTML project',  location: 'Oulu', dateStart: new Date('01 Apr 2018'), dateEnd: new Date('01 May 2018'), require: 'Master degree', imgUrl: './assets/imgs/post_images/babysitting.jpg'},
  ];
  
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
