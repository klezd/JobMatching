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
      console.log(this.credentialsForm);     
      let username = new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ]));

      let email = new FormControl('', Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required
      ]));

      let password = new FormControl('', Validators.compose([
        Validators.pattern(regexValidators.password),
        Validators.required
      ]));

      let cfpassword = new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.equalTo(password)
      ]));

      let checkbox = new FormControl(false, this.termAgree);

      this.credentialsForm = new FormGroup({
          username: username,
          email:email,
          password: password,
          cfpassword: cfpassword,
          checkbox: checkbox,
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
    console.log(this.credentialsForm);
    let user: User = {
      username: this.credentialsForm.controls.username == null ? '' : this.credentialsForm.controls.username.value, 
      password: this.credentialsForm.controls.password == null ? '' : this.credentialsForm.controls.password.value,
      name: '', 
      phone: '', 
      email: this.credentialsForm.controls.email == null ? '' : this.credentialsForm.controls.email.value,
    };
    console.log(user.username);
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
