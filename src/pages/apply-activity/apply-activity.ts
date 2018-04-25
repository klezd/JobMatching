import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Platform, Loading, ModalController, LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, TransferObject } from '@ionic-native/transfer';

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
      this.fileChooser.open().then(uri => {
        console.log(uri);
        this.filePath.resolveNativePath(uri).then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = uri.substring(uri.lastIndexOf('/') + 1, uri.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
      }).catch(e => this.presentToast(e));
    } else {
      this.presentToast("Error while uploading files");
    }   
  }
  // Copy the file to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.CVurl = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + "CV" + ".pdf";
    return newFileName; 
  }
  // Always get the accurate path to your apps folder
  public pathForFile(file) {
    if (file === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + file;
    }
  }
  /**TODO
   * edit url to upload CV file
   */
  public upload() {
    // Destination URL
    var url = this.url;
   
    // File for Upload
    var targetPath = this.pathForFile(this.CVurl);
   
    // File name only
    var filename = this.CVurl;
   
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
    const fileTransfer: TransferObject = this.transfer.create();
   
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
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
          text: 'Continue',
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
