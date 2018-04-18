import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { User } from '../../model/user.model';

@Injectable()
export class UserProvider {
  private userLogged: User[] = [];
  constructor(private storage: Storage) {
  }

  userLogin(user: User) {
    this.userLogged.length != 0 ? this.userLogged.pop() : this.userLogged;
    this.userLogged.push(user);
    this.storage.set('userlogin', this.userLogged);
  }

  getLogUser() {
    console.log(Array.isArray(this.userLogged));
    
    return this.storage.get('userlogin').then((user) => {
        this.userLogged = user == null ? [] : user;
        return Promise.resolve(this.userLogged);               
      }
    );
    //return this.storage.get('userlogin');
  }

  userLogout(user:User) {
    if (this.userLogged.length != 0) {
      this.userLogged.pop();
    }
  }
}
