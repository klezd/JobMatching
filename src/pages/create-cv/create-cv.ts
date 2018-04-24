import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  CV: { CV_name: string, CV_info: {name: string, img: string,} } = { CV_name: '', CV_info: {name: '', img: ''} }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCvPage');
  }
  ionViewWillEnter() {
    //set the CV data if it exists to parse to the form
    //any different for edit page add *ngIf="editMode", that item will appear
    if(this.navParams.get('CV') != null) {
      this.CV = this.navParams.get('CV'); 
      this.editMode = true;
    }
  }

  save() {
    this.navCtrl.push("ViewCV", {CV: this.CV});
  }

}
