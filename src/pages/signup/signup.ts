import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../model/user.model';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  user: User;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    this.navCtrl.setRoot('Tabs');
    console.log(this.user);
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + this.user.username,
      duration: 1500,
      position: 'top'
    }).present();
    this.storage.set('login', true);
    this.storage.set('userlog', this.user.username);    
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

}
