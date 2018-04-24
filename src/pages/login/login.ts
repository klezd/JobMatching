import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
// Import firebase
import { firebaseConfig } from '../../config';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// Import authentication service
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:{email: string, password: string} 
      = {email: '', password : ''};

  rememberme = false;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public firebaseAuth: AngularFireAuth,
              private authService: AuthService,
              private alertCtrl: AlertController) {
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
    let credentials = {
			email: this.user.email,
			password: this.user.password
    };

    this.authService.signIn(credentials).then(
      () => {
        this.navCtrl.setRoot('TabsPage', {user: this.user});
        this.toastCtrl.create({
          message: 'Welcome to OmegaJob, ' + this.user.email,
          duration: 3000,
          position: 'top'
        }).present();
      },
      (error) => {
        console.error(error.message);
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: error.message,
          buttons: ['Close']
        });
        alert.present();
      }
    );
  }

  facebook() {

  }

  google() {

  }

  linked() {
    
  }

}
