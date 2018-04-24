import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  public addnewActivity() {
    this.modalCtrl.create('AddnewactivityPage').present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  iconList = {like: "fa fa-lg fa-heart", accept: "fa fa-lg fa-calendar-check-o", sendRequest: "fa fa-lg fa-clipboard", offer: "fa fa-lg fa-commenting"};
  
  notiList = [{user: "Matt", action: "like", stuff: "post about new cleaning job", icon: this.iconList.like}, 
              {user: "Lucy", action: "offer", stuff: "a intern place in Tampere", icon: this.iconList.offer}, 
              {user: "Josh", action: "accept", stuff: "your request to babysitter in Helsinki", icon: this.iconList.accept}, 
              {user: "Kim", action: "request", stuff: "to do your cleaning post in Helsinki", icon: this.iconList.sendRequest}, ]
}
