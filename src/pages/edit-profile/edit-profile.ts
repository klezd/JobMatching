import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database'
import { Profile } from '../user/profile';

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
  profile = {} as Profile
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {
  }

  saveProfile() {
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
        .then(() => this.navCtrl.setRoot('UserPage'))
    })
  }
}
