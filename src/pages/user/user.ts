import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';

// Import firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Profile } from './profile';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  user: any;
  profile = {} as Profile

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public app: App
  ) {
    console.log("Step 1");
    this.user = firebase.auth().currentUser;
  }

  ionViewWillEnter() {
    console.log("Step 2");
    this.profile.displayName = this.user.displayName;
    this.profile.phoneNumber = this.user.phoneNumber;
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

  viewProfile() {
    this.navCtrl.push('ViewProfilePage');
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage');
  }

  viewAllPosts() {
    this.modalCtrl.create('AllActivitiesPage', {pageName: 'View All My Posts'}).present();
  }

  viewResume() {
    this.navCtrl.push('ViewMyCVs');
  }

  logout() {
   this.app.getRootNav().setRoot('Introduction');
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }
}
