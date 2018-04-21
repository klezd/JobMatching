import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  user: {username: string, password: string, user_info: { name?: string, phone?: string, email?: string}} 
  = {username : '', password : '', user_info: { name : '', phone : '', email : ''}};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public storage: Storage) {
  }   
  
  signup(f) {  
    console.log(f);
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + this.user.username,
      duration: 1500,
      position: 'top'
    }).present();
    //set root page
    this.navCtrl.setRoot('Tabs', {user: this.user});
    // in order to keep sign in
    this.storage.set('rememberLogin', true);
    this.storage.set('login', true);
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

}
