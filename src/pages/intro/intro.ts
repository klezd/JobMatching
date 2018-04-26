import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Introduction {
  @ViewChild('slides') slides: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  exist;

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  omegaAutoPlay() {
    clearTimeout(this.exist);
    this.exist = setTimeout(this.slides.startAutoplay.bind(this.slides), 2000);
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }
}
