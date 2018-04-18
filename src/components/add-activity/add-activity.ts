import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the AddActivityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-activity',
  templateUrl: 'add-activity.html'
})
export class AddActivityComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    
  }

  addNew() {
    this.navCtrl.push('AddnewactivityPage');
  }

}
