import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /**
   * user is the user whose profile will be display.
   * beside by [rootParams] = user: user who logged in, this page can be used to view the profile 
   * of the user whom logged in and the profile of others.
   */
  //TODO
  user:  {name: string, phone: string, email: string, location: string, address: string, postcode: number}
    = {name : 'Loc Tran', phone: '012345678', email: 'loc@omega.com', location: 'Oulu', address: 'Välkyllä', postcode: 90130};
  userToBeViewed; //view this user profile'
  viewOwn = false;
  
  ionViewWillEnter() {
    this.userToBeViewed = this.navParams.get('userToBeViewed');
    /*if(this.navParams.get('viewOwner')!=null){
      this.viewOwn = true;
    }
    //set mode to view
    if(this.user == this.userToBeViewed) {
      this.viewOwn = true;
    }*/

    this.navParams.get('viewOwn') != null ? this.viewOwn = this.navParams.get('viewOwn') : {};
  }

  message() {
    this.navCtrl.push('MessagePage');
  }

  changePass() {
   // this.navCtrl.push('');
  }

  recentContacts() {
   // this.navCtrl.push('');
  }

  payment() {

  }

  editProfile(){
    this.navCtrl.push('EditProfilePage', {user: this.user});
  }
}
