import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  messages = [
    {user: 'Theresa', image: './assets/imgs/user.png', latest_msg: 'Hello, how do you think about this offer?', messages: []},
    {user: 'Sienna', image: './assets/imgs/user.png', latest_msg: 'Hi', messages: []},
    {user: 'Capu', image: './assets/imgs/user.png', latest_msg: 'By', messages: []},
  ];

  goToChat(message) {
    let msg = this.modalCtrl.create('ChatboxPage', {chat: message});
    //get the latest msg received / sent and show on the list
    msg.onDidDismiss(data => {
      message.latest_msg = data;
    });

    msg.present();
  }
}
