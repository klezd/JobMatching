import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoadingController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'Introduction';
  loader: any;
  

  constructor(platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
     public loadingCtrl: LoadingController,
     public event: Events,
     public storage: Storage) {
       
    this.presentLoading();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.loader.dismiss();
      //set root page
      /*if(!this.storage.get('login')) {
        this.rootPage = 'Introduction';
      } else { 
        this.rootPage = 'Tabs';        
      }*/
    });
  }
  

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }


}
