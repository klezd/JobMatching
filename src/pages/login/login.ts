import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private afAuth: AngularFireAuth, private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  alert(message: string) {
    this.alertCtrl.create({title: 'Omega says',
         subTitle: message,
         buttons: ['OK']
    }).present();
   }

  async login() {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value);
      if(result) {
        this.navCtrl.setRoot('Tabs');
      }
    }
    catch(e) {
      console.log(e);
      this.alert(e.message);
    }
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  forgotpass() {
    this.modalCtrl.create('ForgotpassPage').present();
  }

}