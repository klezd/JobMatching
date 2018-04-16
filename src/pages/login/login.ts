import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {};

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
    this.navCtrl.setRoot('Tabs', {user: this.user});
    console.log(this.user);
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + this.user.username,
      duration: 3000,
      position: 'top'
    }).present();
    this.storage.set('login', true);
  }

}
