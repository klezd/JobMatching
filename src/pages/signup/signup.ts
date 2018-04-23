import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private afAuth: AngularFireAuth, private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }   
  
  alert(message: string) {
    this.alertCtrl.create({title: 'Omega says',
         subTitle: message,
         buttons: ['OK']
    }).present();
   }

  async signup() {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
      console.log(result);
      this.alert('Sign up successful')
    }
    catch (e) {
      console.error(e);
      this.alert(e.message);
    }
  }
  
  login() {
    this.navCtrl.push('LoginPage');
  }

}
