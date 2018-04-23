import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chatbox',
  templateUrl: 'chatbox.html',
})
export class ChatboxPage {

  chats;
  latestMsg;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public platfrom: Platform) {
    this.chats=this.navParams.get('chat');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatboxPage');
    this.platfrom.registerBackButtonAction(function(){this.goBack()});
  }

  ionViewWillEnter(){
    
  }

  goBack(){
    this.viewCtrl.dismiss(this.latestMsg);
  }

  onSend(data){
    this.latestMsg = data;
  }

}
