import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonicPage, NavController, AlertController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';

/**
 * Generated class for the AddnewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
 //for date picker 
  months:any[] = [{month:'January'}, {month:'Febuary'}, {month:'March'},
                  {month:'April'}, {month:'May'}, {month:'June'},
                  {month:'July'}, {month:'August'}, {month:'September'},
                  {month:'October'}, {month:'November'}, {month:'December'}];
  now = new Date();
  yearCal = this.now.getFullYear();
  monthNow = this.now.getMonth();
  monthString = this.months[this.monthNow];
  dayNow = this.now.getDate();
  date: any;
  //modify type for newActivity //belong_to is set for the current user **backend set this.
  newActivity: {
    activity_info: {title: string, location: string, img?: any, details: string, requirement?: string},
    worker_info: {number_of_workers: number, number_of_applies?: number},
    belong_to?: any,
    period?: {from? : any, end? : any},
    tags?: Array<string>,
  } = {
    activity_info: {title: '', location: '', img: null, details: '', requirement: ''},
    worker_info: {number_of_workers: 0,number_of_applies:0},
    belong_to: null,
    period: {from : this.dateStart, end : this.dateEnd},
    tags: [],
  };
  constructor(  public navCtrl: NavController,
                private alertCtrl: AlertController,
                private modalCtrl: ModalController,
                private picker: WheelSelector,
                public navParams: NavParams,
                private platform: Platform,
                private viewCtrl: ViewController,) {
    
    let i = 0;
    let years:any[] = [];
    let days:any[] = [];

    while (i<20) {
      years.push({"year": this.yearCal.toString()});
      this.yearCal ++;
      i ++;
    }
    this.yearCal = this.now.getFullYear();
    for(i = 1; i<31; i++) {
     days.push({"day": i.toString()});
    }
     
    let date = {days: days, months: this.months, years: years};
    this.date = date;
    console.log(this.date);
    if(this.navParams.get('activity')!=null){
      //if != null, so this is in edit mode
      this.editMode = true;
      this.newActivity = this.navParams.get('activity');
    }
  } 
  
  //set to cannot leave without confirm if any changes.
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
  
  //pick date for start and return value
  dateSPicker() {
    if (this.platform.is('cordova')||this.platform.is('android')) {
      // You're on a device, call the native plugins.
      console.log("click");
      this.picker.show({
        title: "Set date start",
        items: [this.date.day, this.date.months, this.date.years],
        positiveButtonText: "Ok",
        negativeButtonText: "Cancel",
      }).then(result => {
        this.newActivity.period.from = result[0].day + " " + result[1].month + " " + result[2].year;
        console.log(this.start); 
      });

    } else {
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      this.newActivity.period.from = "02 April 2018";
    }    
  }
  //pick date for end and return value
  dateEPicker() {
    if (this.platform.is('cordova')||this.platform.is('android')) {
      // You're on a mobile device "IOS ANDROID WINDOWS" 
      // now you can call your native plugins
      console.log("click");
      this.picker.show({
        title: "Set date end",
        items: [this.date.days, this.date.months,this.date.years],
        positiveButtonText: "Ok",
        negativeButtonText: "Cancel"
      }).then(result => {
        this.newActivity.period.end = result[0].day + " " + result[1].month + " " + result[2].year;
      });
    } else {
      // You're testing in a browser so you may want to use another method or run your code on a emulator
      this.newActivity.period.end = "10 April 2018";
    }   
  }

  uploadPic() {
    let picture = this.modalCtrl.create("choose-pic"); //is the choose-job-pic page
    picture.onDidDismiss((data)=>{
      this.newActivity.activity_info.img = data;
    });
    picture.present();
  }

  // resize textarea
  @ViewChild('textarea') textarea: ElementRef;
  
  resize() {
      this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
  }

  post() {
    console.log("Add new activity");
    console.log(this.newActivity.activity_info.img);
    this.modalCtrl.create('ActivityDetailPage', {activity: this.newActivity, owner: this.owner}).present(); 
    //remove owner: this.owner when set with **backend**
  }  
}
