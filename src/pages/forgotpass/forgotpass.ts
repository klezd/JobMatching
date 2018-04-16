import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ForgotpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotpassPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpassPage');
  }

  resetpass() {
    this.modalCtrl.create('ResetpassPage').present();
  }

  login() {
    this.viewCtrl.dismiss();
  }

}
