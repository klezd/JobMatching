import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../model/user.model';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  forgotpass() {
    this.modalCtrl.create('ForgotpassPage').present();
  }

  login() {
    this.navCtrl.setRoot('Tabs');
    console.log(this.user);
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + this.user.username,
      duration: 3000,
      position: 'top'
    }).present();
    this.storage.set('login', true);
    this.storage.set('userlog', this.user.username);
  }

}
