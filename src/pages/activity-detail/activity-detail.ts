import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavParams, NavController, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {
  @ViewChild('favourite') favourite: ElementRef;
  user: any;
  activity;
  owner = false;

  constructor(  public viewCtrl:ViewController, 
                public navCtrl: NavController,
                public toastCtrl: ToastController,
                public navParams: NavParams,
                public storage: Storage) {
    
    //get parsed data
    this.activity = this.navParams.get('activity');

    /*this.user = this.storage.get('userlogin');
    console.log(this.activity.belong_to);
    console.log("storage userlogin");
    console.log(this.storage.get('userlogin'));
    /*this.activity.belong_to == this.user? this.owner=true: this.owner=false;*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityDetailPage');
  }   
  
  apply() {
    console.log("apply");
    //code
  }

  edit() {
    this.navCtrl.push('EditActivityPage', {activity: this.activity});
  }

  addtoFavourite() {
    console.log(this.favourite.nativeElement.classList);
    var fav = this.favourite.nativeElement.classList;
    if (fav.contains('fa-heart-o')) {
      // code to add to favourite list
      // some code goes here
      //UI code
      fav.remove('fa-heart-o');
      fav.add('fa-heart');
      this.toastCtrl.create({
        message: 'Added to your favourite list',
        duration: 1500,
        position: 'top'
      }).present();
    } else {
      // code to remove from favourite list
      // some code goes here
      //UI code
      fav.remove('fa-heart');
      fav.add('fa-heart-o');    
      this.toastCtrl.create({
        message: 'Removed from your favourite list',
        duration: 1500,
        position: 'top'
      }).present(); 
    }    
  }
}
