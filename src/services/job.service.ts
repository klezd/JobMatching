import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { UserService } from '../services/user.service';
import { Job } from '../models/job';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class JobService {
    
    public fireAuth: any;
    public jobRef: any;

    constructor (private afDb: AngularFireDatabase) {
        this.fireAuth = firebase.auth();
        this.jobRef = firebase.database().ref('Jobs');
    }

    createJob(job: Job) {
        this.afDb.list('/Jobs').push({
          title: job.title,
          location: job.location,
          dateStart: job.dateStart,
          dateEnd: job.dateEnd,
          describe: job.describe,
          require: job.require,
          employee: job.employee,
          ref: this.jobRef
          
        }).then( result => {
          result.showAlert('A job is posted.');
        })
      }
}