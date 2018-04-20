import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'add-activity',
  templateUrl: 'addactivity.html'
})
export class AddactivityComponent {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
  }
  addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

}
