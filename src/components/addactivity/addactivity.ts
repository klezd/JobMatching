import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'add-activity',
  templateUrl: 'addactivity.html'
})
export class AddactivityComponent {

  constructor(
    public modalCtrl: ModalController) {
  }
  addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

}
