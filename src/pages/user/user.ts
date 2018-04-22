import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
 // user: User;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public app: App) {
  }
  
  ionViewWillEnter() {
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout() {
   this.app.getRootNav().setRoot('Introduction');
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }
 

}
