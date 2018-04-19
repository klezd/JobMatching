import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { User } from '../../model/user.model';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { regexValidators } from '../validators/validators';
import { CustomValidators } from 'ng2-validation';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  credentialsForm : FormGroup;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private formBuilder: FormBuilder,
              public storage: Storage) {
      let password = new FormControl('', Validators.compose([
        Validators.pattern(regexValidators.password),
        Validators.required
      ]));

      let cfpassword = new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.equalTo(password)
      ]));

      this.credentialsForm = new FormGroup({
          username: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(5)
          ])),
          email:new FormControl('', Validators.compose([
            Validators.pattern(regexValidators.email),
            Validators.required
          ])),
          password: password,
          cfpassword: cfpassword,
          checkbox: new FormControl(false, this.termAgree),
        }); 
  }  
  
  termAgree(c: AbstractControl): { [key: string]: boolean } {
    let rv: { [key: string]: boolean } = {};
    if (!c.value) {
      rv['notChecked'] = true;
    }
    return rv;
  }
  
  signup() {  
    let user: User = {
      username: this.credentialsForm.controls.username.value, 
      password: this.credentialsForm.controls.password.value,
      name: '', 
      phone: '', 
      email: this.credentialsForm.controls.email.value,
    };
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
