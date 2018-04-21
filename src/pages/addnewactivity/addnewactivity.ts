import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, IonicPage, NavController, AlertController, ViewController, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

import { Activity } from '../../model/activity.model';
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
  alert: any;
  //modify type for newActivity //
  newActivity: {
    activity_info: {
      title: string,
      location: string,
      img?: string,
      details: string,
      requirement?: string,
    },
    worker_info: {
      number_of_workers: number,
      number_of_applies?: number
    },
    belong_to?: any,
    period?: { 
      from? : any,
      end? : any
    },
    tags?: Array<string>,
  }
    //for date picker
 
  months:string[] = ['January', 'Febuary', 'March',
                    'April', 'May', 'June',
                    'July', 'August', 'September',
                    'October', 'November', 'December'];
  days:number[] = [];
  years: any[] = [];
  date: string;
  now = new Date();
  yearCal = this.now.getFullYear();
  monthNow = this.now.getMonth();
  monthString = this.months[this.monthNow];
  dayNow = this.now.getDate();

  constructor(  public navCtrl: NavController,
                private alertCtrl: AlertController,
                private modalCtrl: ModalController,
                private picker: WheelSelector,
                private platform: Platform,
                private viewCtrl: ViewController,) {

    this.addnewWorkform = new FormGroup({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      requirement: new FormControl(),
      details: new FormControl(),      
      numOfWork: new FormControl('', Validators.compose([Validators.required, Validators.min(1)]) ),
    });
    let i = 0;
    let years:number[] = [];
    let days:number[] = [];
    while (i<20) {
      years.push(this.yearCal);
      this.yearCal ++;
      i ++;
    }
    this.yearCal = this.now.getFullYear();
    for(i = 1; i<31; i++) {
     days.push(i);
    }
    this.years = years;
    this.days = days;    
  } 

  addnewWorkform : FormGroup;

  close() {
    if(this.addnewWorkform.dirty){
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

  dateStart: any;
  dateEnd: any;
  //pick date for start and return value
  dateSPicker() {
    if (this.platform.is('cordova')) {
      // You're on a device, call the native plugins.
      console.log("click");
      this.picker.show({
        title: "Set date start",
        items: [this.days, this.months, this.years],
      }).then(result => {
        this.dateStart = result[0] + " " + result[1] + " " + result[2];
        console.log(this.start); 
      });

    } else {
      // You're testing in browser, do nothing or mock the plugins' behaviour.
      this.dateStart = "02 April 2018";
    }    
  }
  //pick date for end and return value
  dateEPicker() {
    if (this.platform.is('cordova')) {
      // You're on a mobile device "IOS ANDROID WINDOWS" 
      // now you can call your native plugins
      console.log("click");
      this.picker.show({
        title: "Set date",
        items: [this.days, this.months, this.years],
      }).then(result => {
        this.dateEnd = result[0] + " " + result[1] + " " + result[2];
      });
    } else {
      // You're testing in a browser so you may want to use another method or run your code on a emulator
      this.dateEnd = "10 April 2018";
    }
   
  }

  addNew() {
    console.log("Add new activity");
    this.navCtrl.push('ActivityDetailPage', {activity: this.newActivity} );
  }
}
