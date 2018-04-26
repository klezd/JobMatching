import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  user: {email: string, password: string} = {email : '', password : ''};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private authService: AuthService,
              private alertCtrl: AlertController) {
  }   
  
  signup() {      
    this.authService.signUp(this.user).then(
      () => {
        this.toastCtrl.create({
          message: 'Successfully signing up to Omega',
          duration: 1500,
          position: 'top'
        }).present();
        //set root page with the info of user
        this.navCtrl.setRoot('TabsPage', {user: this.user});
      },
      (error) => {
        console.error(error);
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: error.message,
          buttons: ['Close']
        });
        alert.present();
      }
    );  
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  facebook() {

  }

  google() {

  }

  linked() {
    
  }

}
