import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'Introduction';
  loader: any;  
  remember=false;
  login=false;

  constructor(platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
     public loadingCtrl: LoadingController,) {
       
    this.presentLoading();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.loader.dismiss();
      
      //code for set root page (here I am set the root page is TabsPage which can be
      // understood as user already logged in).
    
      if(this.remember && this.login) {
        this.rootPage = 'TabsPage';
      } else {
        this.rootPage = 'Introduction';        
      }
    });
  }
  

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }


}
