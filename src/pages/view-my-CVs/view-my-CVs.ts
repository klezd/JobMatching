import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-my-cvs',
  templateUrl: 'view-my-CVs.html',
})
export class ViewMyCVs {
  /**
   * TODO
   * forApply var is used:
   * forApply = false: user just views their CV from the USER tabs,
   * forApply = true: user view this page navigated from the apply jobs page.
   * if false: just show list
   * if true: show list with buttons choose, from choose, '
   * have func choose() to back to the previous page.
   * the 'toApply' from navParams is set for forApply to true. (this code has been added)
   * CVchosen is use to get the CVchosen (if the user wanna choose CV again)
   */
  forApply = false;
  /**
   * TODO
   * CV list here with just demo name. Any info list to CV_info (user will create new CV with name of
   * CV and then the info of CV)
   */
  //declair the type of CV
  CVs: { CV_name: string, CV_info: {name: string, img: string,} }[] = [
    {
      CV_name: 'CV for cleaning',
      CV_info: {name: 'James Smith', img: ''}
    },
    {
      CV_name: 'Designer',
      CV_info: {name: 'Jamse Smith', img: ''}
    }
  ];
  activityToApply;
  message;

  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public modalCtrl: ModalController,
                private viewCtrl: ViewController,
                public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    //if user go to this page from apply job.
    this.navParams.get('toApply') == true ? this.forApply=true : this.forApply=false;
    this.navParams.get('activity') != null ? this.activityToApply= this.navParams.get('activity') : {};
    this.navParams.get('msg') != null ? this.message= this.navParams.get('msg') : {};    
  }

  choose(CV) {
    //TODO save the selected CV and then back to parent page
    this.viewCtrl.dismiss(CV);
  }

  help() {
    this.alertCtrl.create({
      title: '<center><i class="fa fa-question-circle"></i> HELP</center>',
      subTitle: 'Swipe at the CV to left to View and Edit',
      buttons: ['OK']
    }).present();
  }
  
  /**
   * edit CV will go to createCV page with the information 
   */
  view(CV) {
    if(this.forApply){
      let viewCV = this.modalCtrl.create('ViewCV', {CV: CV, apply: this.forApply, activity: this.activityToApply, msg: this.message});
      viewCV.present();
    } else {
      this.navCtrl.push('ViewCV', {CV: CV});
    }
  }

  edit(CV){
    this.navCtrl.push('CreateCV', {CV: CV});
  }

  newResume() {
    this.navCtrl.push('CreateCV');
  }
  
}


