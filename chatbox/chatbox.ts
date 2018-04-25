import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chatbox',
  templateUrl: 'chatbox.html',
})
export class ChatboxPage {

  username: string = '';
  message: string = '';
  subscription;
  messages: object[] = [];

  constructor(public afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public platfrom: Platform) {
    this.username = this.navParams.get('username');
    this.subscription = this.afDatabase.list('/Chats').subscribe( data => {
      this.messages = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatboxPage');
    this.platfrom.registerBackButtonAction(function(){this.goBack()});
  }

  ionViewWillEnter(){
    
  }

  goBack(){
    this.viewCtrl.dismiss(this.message);
  }

  onSend(data){
    this.message = data;
  }

  sendMessage() {
    this.afDatabase.list('/Chats').push({
      username: this.username,
      message: this.message
    });
  }

}
