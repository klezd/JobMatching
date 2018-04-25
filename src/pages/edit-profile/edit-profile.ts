import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Profile } from '../user/profile';

// Import firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database'
import * as firebase from 'firebase/app';
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
  user: any;
  profile = {} as Profile;
  profilePic = "./assets/imgs/user.png";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
      this.user = firebase.auth().currentUser; console.log('user: ', this.user);
      this.profile.displayName = this.user.displayName;
      this.profile.phoneNumber = this.user.phoneNumber;
      this.profile.phoneNumber = this.user.location;
      this.profile.phoneNumber = this.user.address;
      this.profile.phoneNumber = this.user.postcode;
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

  saveProfile() {
    this.user.updateProfile({
      displayName: this.profile.displayName,
      location: this.profile.location,
      address: this.profile.location,
      postcode: this.profile.postcode
    }).then(function() {
      console.log('Your profile has been updated successfully.');
    }).catch(function(error) {
      console.error('Server error!');
    });

  }

}
