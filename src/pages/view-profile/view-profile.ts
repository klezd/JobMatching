import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,  FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../user/profile';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  profileData:  FirebaseObjectObservable<Profile>

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {
  }
 
  user; //this user is logged in
  userToBeViewed; //view this user profile'
  viewOwn = false;
  
  ionViewWillLoad() {
    this.profileData = this.afDatabase.object(`profile/${this.user.uid}`)
    }
  }
