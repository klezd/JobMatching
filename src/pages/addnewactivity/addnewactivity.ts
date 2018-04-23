import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonicPage, NavController, AlertController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';


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
                private picker: DatePicker,
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
  }
  //check if form has changes
  touchForm =false;
  touch() {
    this.touchForm = true
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
    let upload = this.modalCtrl.create('ChooseJobPicPage');
    upload.present();
    upload.onDidDismiss(data => {
      this.newActivity.activity_info.img = data;
    });
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
  //set default img
  //pick date for start and return value
  dateSPicker() {
    if(this.platform.is('android')){
      //if on device    
      this.picker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.picker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date =>  {
          this.newActivity.period.from = date;
          console.log(date);
          console.log(typeof date);
        },
        err => {
          console.log('Error occurred while getting date: ', err);
          this.newActivity.period.from = "15 April 2018"
        }
      );
    }
  }
  //pick date for end and return value
  dateEPicker() {
    if(this.platform.is('android')){
      //if on device 
      this.picker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.picker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date =>  {
          this.newActivity.period.end = date;
          console.log(date);
          console.log(typeof date);
        },
        err => {
          console.log('Error occurred while getting date: ', err);
          this.newActivity.period.end = "15 April 2018"
        }
      );
    }
  }

  // resize textarea
  @ViewChild('textarea') textarea: ElementRef;
  
  resize() {
      this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
  }
  //post / save edit
  post() {
    console.log("Add new activity");
    console.log(this.newActivity.activity_info.img);
    this.modalCtrl.create('ActivityDetailPage', {activity: this.newActivity, owner: this.owner}).present(); 
    //remove owner: this.owner when set with **backend**
  }  
}
