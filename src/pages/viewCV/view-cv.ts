import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-cv',
  templateUrl: 'view-cv.html',
})
export class ViewCV {
  CV: any;
  chooseBtn=false;
  activityToApply;
  msgApply;

  constructor(  public navCtrl: NavController, 
                public viewCtrl: ViewController,
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

    this.navParams.get('activity') != null ? this.activityToApply= this.navParams.get('activity') : {};
    this.navParams.get('msg') != null ? this.msgApply= this.navParams.get('msg') : {};    

  }

  choose(CV) {
    this.navCtrl.push('ApplyActivityPage', {CV: CV, activity: this.activityToApply, msg: this.msgApply});
  }
}
