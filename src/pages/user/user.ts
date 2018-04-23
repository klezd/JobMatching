import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
 user: any;
  
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public modalCtrl: ModalController,
                public app: App) {
  }
  
  ionViewWillEnter() {
    this.user = this.navParams.get('user');
    console.log(this.user);
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
    this.navCtrl.push('ViewPostsPage');
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
