import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform, Loading, ModalController, LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import * as firebase from 'firebase/app';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-apply-activity',
  templateUrl: 'apply-activity.html',
})
export class ApplyActivityPage {
  activity;
  message;
  loading: Loading;
  //TODO declare url destination for upload file (CV)
  url;
  chosenCV;

  constructor(  public navCtrl: NavController, 
                public modalCtrl: ModalController,
                public navParams: NavParams,
                private alertCtrl: AlertController,
                private fileChooser: FileChooser,
                public platform: Platform,
                private transfer:Transfer,
                private filePath: FilePath,
                private file: File,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController) {
    this.activity = this.navParams.get('activity');    
  }

  ionViewWillEnter() {
    if(this.navParams.get('CV')!=null) {
      this.chosenCV = this.navParams.get('CV');
    }
    this.navParams.get('msg') != null ? this.message= this.navParams.get('msg') : {};    

  }

  createCV(){
    this.navCtrl.push("CreateCV", {toApply: true, activity: this.activity, msg: this.message});
  }  

  userCV() {
    let chooseCV = this.modalCtrl.create("ViewMyCVs", {toApply: true, activity: this.activity, msg: this.message});

    chooseCV.onDidDismiss(chosenCV => {
      this.chosenCV = chosenCV;
      console.log(chosenCV);
    });

    chooseCV.present();
  }

  CVurl;
  uploadCV() {
    //code to upload CV from device //file PDF or words
    if (this.platform.is('android')) {
      this.fileChooser.open().then((uri) => {
        console.log(uri);
        this.file.resolveLocalFilesystemUrl(uri).then( (newUrl) => {
          
          let dirPath = newUrl.nativeURL;
          let dirPathSegment = dirPath.split('/');
          dirPathSegment.pop();
          dirPath = dirPathSegment.join('/');

          this.file.readAsArrayBuffer(dirPath, newUrl.name).then( async (buffer)=> {
            await this.uploadToDtb(buffer, newUrl.name);
          });

        });
      })
    } 
  }

  async uploadToDtb(buffer, fileName) {
    let blob = new Blob([buffer], {type: "application/pdf"});

    let storage = firebase.storage();

    storage.ref('CVs/' + name).put(blob).then((done)=> {
      this.presentToast("done");
    }, (error) => { 
      this.presentToast(JSON.stringify(error));
    })
  }
 
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  /**TODO
   * after submit, a message will be sent to the owner of the post
   */
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
            this.navCtrl.setRoot("TabsPage", {index: 1});
            //function called
            this.sendApplication(this.activity);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    }).present();
    //code here
    //to send message
  }

  sendApplication(activity){
    //code add here to save to database and increase num of applied
    //add code also for the owner to see the message, and view/download CV (view if from app, download if from upload)
    //also code for 
    //CV can be uploaded from device or chosen from list in user page.
  }

}
