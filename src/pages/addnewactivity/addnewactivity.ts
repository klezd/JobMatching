import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonicPage, NavController, AlertController, ViewController, ModalController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-addnewactivity',
  templateUrl: 'addnewactivity.html',
})
export class AddnewactivityPage {
  @ViewChild('datestart') start: ElementRef;
  @ViewChild('dateend') end: ElementRef;
  //show alert to confirm
  alert: any;
  //set edit mode to parse data if true
  editMode = false;
  //work done, mark as done 
  //(when user clicked this, the work is marked as done and no more apply available)
  workDone = false;
  //set to open the page detail with owner ---- *** remove when get data with owner from backend.
  owner = true;
  dateStart: any;
  dateEnd: any;
  constructor(  public navCtrl: NavController,
                private alertCtrl: AlertController,
                private modalCtrl: ModalController,
                private platform: Platform,
                public navParams: NavParams,
                private viewCtrl: ViewController,) {
  } 

  ionViewWillEnter() {
    if(this.navParams.get('activity')!=null){
      this.editMode = true;
      this.newActivity = this.navParams.get('activity');
    }
    if(this.workDone) {
      //if this job has been marked as done so these code will run.
    }
    //set func for hardware back button
    this.platform.registerBackButtonAction(function(){
      this.close();
    },2);
  }
  //check if form has changes
  touchForm =false;
  touch(f) {
    this.touchForm = true
    console.log(f.value);
  }
  close() {
    if(this.touchForm){
      this.alertCtrl.create({
        title: 'DISCARD CHANGES',
        message: 'Do you want to continue or discard changes?',
        buttons: [
          {
            text: 'Discard',          
            handler: () => {
              this.viewCtrl.dismiss();
            }
          },
          {
            text: 'Continue',
            role: 'cancel',
          }
        ]
      }).present();
    }
    else {
      this.viewCtrl.dismiss();
    }    
  }
  //upload picture
  uploadPic() {
    let upload = this.modalCtrl.create('ChoosePicPage', {imgJob: true});
    
    upload.onDidDismiss(data => {
      this.newActivity.activity_info.img = data;
    });

    upload.present();
  }
  //modify type for newActivity //belong_to is set for the current user **backend set this.
  newActivity: {
    activity_info: {title: string, location: string, img?: string, details: string, requirement?: string},
    worker_info: {number_of_workers: number, number_of_applies?: number},
    belong_to?: any,
    period?: {from? : any, end? : any},
    tags?: Array<string>,
  } = {
    activity_info: {title: '', location: '', img: './assets/imgs/logo.png', details: '', requirement: ''},
    worker_info: {number_of_workers: 0,number_of_applies:0},
    belong_to: null,
    period: {from : null, end : null},
    tags: [],
  };

  // resize textarea
  @ViewChild('textarea') textarea: ElementRef;
  
  resize() {
      this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
  }
  //post / save edit
  post() {
    console.log("Add new activity");
    console.log(this.newActivity.activity_info.img);
    this.modalCtrl.create('ActivityDetailPage', {activity: this.newActivity, owner: this.owner, fromForm: true}).present(); 
    //remove owner: this.owner when set with **backend**
  }  
}
