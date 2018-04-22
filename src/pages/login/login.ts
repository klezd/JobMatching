import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../model/user.model';
import { UserProvider} from '../../providers/user/user';
import { AlertController } from 'ionic-angular';

// Import firebase
import { firebaseConfig } from '../../config';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Import authentication service
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = {
    username: '', 
    password: '', 
    user_info: {
      email: ''
    }  
  };
  rememberme = false;

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage,
    private userProvider: UserProvider,
    public firebaseAuth: AngularFireAuth,
    private authService: AuthService,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  forgotpass() {
    this.modalCtrl.create('ForgotpassPage').present();
  }

  isRemember(rememberme) {
    this.rememberme = rememberme;
    if(rememberme) {
      this.storage.set('rememberLogin', true);
      console.log("remember login");
    } else {
      this.storage.remove('rememberLogin');
      console.log("don't remember login");
    }
  }
  
  remember : any;
  login() {
    let credentials = {
			username: this.user.username,
			password: this.user.password
    };
    
		this.authService.signIn(credentials)
			.then(
				() => {
          this.navCtrl.setRoot('Tabs', {user: this.user});
          console.log(this.user.username);
          this.isRemember(this.rememberme);

          this.toastCtrl.create({
            message: 'Welcome to OmegaJob, ' + this.user.username,
            duration: 3000,
            position: 'top'
          }).present();

          this.userProvider.userLogin(this.user);
          this.storage.set('login', true);
        },
				(error) => {
          console.error(error.message);
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: error.message,
            buttons: ['Close']
          });
          alert.present();
        }
			);
  }

}

