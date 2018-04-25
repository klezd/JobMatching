import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  //TODO
  user = {name : 'Loc Tran', phone: '012345678', email: 'loc@omega.com', location: 'Oulu', address: 'Välkyllä', postcode: 90130};

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public modalCtrl: ModalController,
                public app: App) {

  }
  
  ionViewWillEnter() {
    console.log(this.user);
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

  viewProfile() {
    this.navCtrl.push('ViewProfilePage', {user: this.user, viewOwn: true});
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage', {user: this.user});
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
