import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';

import { Profile } from '../user/profile';

// Import firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database'
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  user: any;
  profile = {} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = firebase.auth().currentUser;
  }
  /**
   * user is the user whose profile will be display.
   * beside by [rootParams] = user: user who logged in, this page can be used to view the profile 
   * of the user whom logged in and the profile of others.
   */

  userToBeViewed; //view this user profile'
  viewOwn = false;
  
  ionViewWillEnter() {
    this.profile.displayName = this.user.displayName;
    this.profile.phoneNumber = this.user.phoneNumber;
    this.userToBeViewed = this.navParams.get('userToBeViewed');
    if(this.navParams.get('viewOwner')!=null){
      this.viewOwn = true;
    }
    //set mode to view
    if(this.user == this.userToBeViewed) {
      this.viewOwn = true;
    }
  }

  message() {
    this.navCtrl.push('MessagePage');
  }

  changePass() {
   // this.navCtrl.push('');
  }

  recentContacts() {
   // this.navCtrl.push('');
  }

  payment() {

  }

  editProfile(){
    this.navCtrl.push('EditProfilePage');
  }
}
