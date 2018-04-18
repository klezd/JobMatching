import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, App } from 'ionic-angular';
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
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public app: App,
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
   this.app.getRootNav().setRoot('Introduction');
  }
 

}
