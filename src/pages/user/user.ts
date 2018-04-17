import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserProvider} from '../../providers/user/user';
import { User } from '../../model/user.model';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
 // user: User;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private userProvider: UserProvider) {
  }
  
  ionViewWillEnter() {
   // this.user = this.userProvider.getLogUser()[0];
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  logout() {
   // this.navCtrl.setRoot('Introduction');
   // this.userProvider.userLogout();
  }
 

}
