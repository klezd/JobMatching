import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../model/user.model';
import { UserProvider} from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = {username: '', password: '', user_info:{email: ''}  };
  rememberme = false;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage,
    private userProvider: UserProvider) {
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

    this.userProvider.userLogin(this.user);
    this.storage.set('login', true);
  }

}
