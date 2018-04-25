import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { resume } from './CV'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the CreateCvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-cv',
  templateUrl: 'create-cv.html',
})
export class CreateCV {

  editMode = false;

  resume = {} as resume;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCvPage');
  }
  ionViewWillEnter() {
    //set the CV data if it exists to parse to the form
    //any different for edit page add *ngIf="editMode", that item will appear
    if(this.navParams.get('resume') != null) {
      this.resume = this.navParams.get('CV'); 
      this.editMode = true;
    }
  }

  createCV() {
    this.afAuth.authState.take(1).subscribe( auth =>{
      this.afDatabase.object(`resume/${auth.uid}`).set(this.resume)
        .then(() =>  this.navCtrl.setRoot("ViewCV"));
    })
  }

}
