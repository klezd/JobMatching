import { Component,  ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexValidators } from '../validators/validators';
import { CustomValidators } from 'ng2-validation';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('checked') checkbox: ElementRef;
  public credentialsForm: FormGroup;
  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private formBuilder: FormBuilder,
              public storage: Storage) {

      console.log(this.credentialsForm);
      this.credentialsForm = this.formBuilder.group(
        {
          email: [
            '', Validators.compose([
              Validators.pattern(regexValidators.email),
              Validators.required
            ])
          ],
          password: ['', Validators.compose([
            Validators.pattern(regexValidators.password),
            Validators.required
          ])],
          cfpassword: ['', Validators.compose([
            Validators.required
          ])],
          checkbox: [false, Validators.required],
        }, 
        /*{
          asyncValidator: this.matchpass()
        }      */  
      );
      
      console.log( this.credentialsForm);
  }

  matchpass() {
    console.log(this.credentialsForm.controls.password);
  }

  

  signup() {    
    let user: User = {
      username: this.credentialsForm.controls.username.value, 
      password: this.credentialsForm.controls.password.value, 
      name: '', 
      phone: '', 
      email: this.credentialsForm.controls.email.value };
    this.navCtrl.setRoot('Tabs');
  
    this.toastCtrl.create({
      message: 'Welcome to OmegaJob, ' + user.username,
      duration: 1500,
      position: 'top'
    }).present();
    this.storage.set('login', true);
    this.storage.set('userlogin', user.username);    
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

}
