import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class JobService {
    
    public fireAuth: any;
    public jobRef: any;

    constructor () {
        this.fireAuth = firebase.auth();
        this.jobRef = firebase.database().ref('Jobs');
    }

}