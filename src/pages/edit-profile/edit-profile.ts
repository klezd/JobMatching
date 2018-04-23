import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  profilePic = "./assets/imgs/user.png";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  uploadPic() {
    let upload = this.modalCtrl.create('ChoosePicPage', {imgJob: false});
    
    upload.onDidDismiss(data => {
      this.profilePic = data;
    });

    upload.present();
  }

  

}
