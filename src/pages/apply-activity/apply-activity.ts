import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

@IonicPage()
@Component({
  selector: 'page-apply-activity',
  templateUrl: 'apply-activity.html',
})
export class ApplyActivityPage {
  activity;
  message;
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private fileChooser: FileChooser,
                private toastCtrl: ToastController) {
    this.activity = this.navParams.get('activity');    
  }

  createCV(){
    this.navCtrl.push("CreateCV");
  }

  userCV() {
    this.navCtrl.push("ViewMyCVs", {toApply: true});
  }

  uploadCV() {
    //code to upload CV from device //file PDF or words
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

  submit() {
    this.alertCtrl.create({
      title: "Apply",
      message: "Apply to this work?",
      buttons: [
        {
          text: 'Apply',          
          handler: () => {
            this.toastCtrl.create({
              message: 'Your application has sent',
              position: 'bottom',
              showCloseButton: true,
              closeButtonText: "OK"
            }).present();
            this.navCtrl.push("IndexPage");
            //function called
            this.sendApplication(this.activity);
          }
        },
        {
          text: 'Continue',
          role: 'cancel',
        }
      ]
    }).present();
  }

  sendApplication(activity){
    //code add here to save to database and increase num of applied
    //add code also for the owner to see the message, and view/download CV (view if from app, download if from upload)
  }


}
