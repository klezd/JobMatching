import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  profilePic = "./assets/imgs/user.png";

  user:  {name: string, phone: string, email: string, location: string, address: string, postcode: number}
    = {name : 'Loc Tran', phone: '012345678', email: 'loc@omega.com', location: 'Oulu', address: 'Välkyllä', postcode: 90130};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }
  
  ionViewWillEnter() {
    this.user = this.navParams.get('user');
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

  save() {
    this.navCtrl.push("ViewProfilePage", {viewOwn: true, userToBeViewed: this.user});
  }

}
