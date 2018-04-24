import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /**
   * user is the user whose profile will be display.
   * beside by [rootParams] = user: user who logged in, this page can be used to view the profile 
   * of the user whom logged in and the profile of others.
   */
  user; //this user is logged in
  userToBeViewed; //view this user profile'
  viewOwn = false;
  
  ionViewWillEnter() {
    this.userToBeViewed = this.navParams.get('userToBeViewed');
    //set mode to view
    if(this.user == this.userToBeViewed) {
      this.viewOwn = true;
    }
  }

  message() {
    this.navCtrl.push('MessagePage');
  }

  changePass() {
    this.navCtrl.push('');
  }

  recentContacts() {
    this.navCtrl.push('');
  }

  payment() {

  }

  editProfile() {
    this.navCtrl.push('EditProfilePage');
  }
}
