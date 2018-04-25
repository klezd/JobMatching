import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Nav, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-cv',
  templateUrl: 'view-cv.html',
})
export class ViewCV {
  CV: any;
  chooseBtn=false;

  constructor(  public navCtrl: NavController, 
                public viewCtrl: ViewController,
                private nav: Nav,
                public modalCtrl: ModalController,
                public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCvPage');
  }

  ionViewWillEnter() {
    this.CV = this.navParams.get('CV');
    if(this.navParams.get('apply')!=null){
      this.chooseBtn = this.navParams.get('apply');
    }
  }

  choose(CV) {
    let goApply = this.modalCtrl.create('', {CV: CV});
    goApply.present();

    setTimeout(() => {
      // Close modal
      this.viewCtrl.dismiss();
    }, 500);
  }
}
