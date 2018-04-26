import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
    
    public fireAuth: any;
    public userID: any;

    constructor (private afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe(user => {
            if(user) this.userID = user.uid
        })
    }

}