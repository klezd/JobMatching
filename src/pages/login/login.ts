import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: {username: string, password: string, user_info: { name?: string, phone?: string, email?: string}} 
      = {username : '', password : '', user_info: { name : '', phone : '', email : ''}};

  rememberme = false;

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

  isRemember(rememberme) {
    this.rememberme = rememberme;
    if(rememberme) {
      this.storage.set('rememberLogin', true);
      console.log("remember login");
    } else {
      this.storage.remove('rememberLogin');
      console.log("don't remember login");
    }
  }
  //for form
  remember : any;
  login() {
    this.navCtrl.setRoot('Tabs', {user: this.user});
    console.log(this.user.username);
    this.isRemember(this.rememberme);
    
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + this.user.username,
      duration: 3000,
      position: 'top'
    }).present();

    this.storage.set('login', true);
  }

}
