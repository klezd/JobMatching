import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { User } from '../../model/user.model';
import { Users } from '../../mocks/providers/users';

@Injectable()
export class UserProvider {
  private userLog: string;
  private userLogged: User[] = [];

  constructor(private storage: Storage,
              private users: Users) {
  }

  userLogin(user: User) {
    this.storage.set('userlogin', user);
    this.storage.set('login', true);
    this.userLogged.push(user);    
  }

  userSignup(user: User) {
    this.users.newUser(user);
    this.userLogged.push(user);
    this.storage.set('login', true);
    this.storage.set('userlogin', user); 
  }

  getLogUser() {
    return Promise.resolve(this.storage.get('userlogin').then(
      (res) => {
        this.userLog = res;
        return this.userLog;
      }
    ));    
  }

  userLogout(user:User) {
    this.storage.remove('userlogin');
    this.storage.clear();
    this.userLogged.splice(this.userLogged.indexOf(user), 1);
  }
}
