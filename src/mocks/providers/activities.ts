//fake data (providers)

import { Injectable } from '@angular/core';

import { Activity } from '../../model/activity.model';
import { User } from '../../model/user.model';

import { Users } from './users';

@Injectable()
export class Activities {
    activities: Activity[] = [];
    users = new Users;
    userA = this.users.users[0];
    userB = this.users.users[1];
    constructor() {
        let activities = [
            {
                activity_info: {
                    title: 'House Keeper',
                    location: 'Oulu',
                    img: 'https://picsum.photos/200',
                    details: 'Keeping house clean for 2 weeks',
                    requirement: 'no requirement',
                },
                worker_info: {
                    number_of_workers: 1,
                    number_of_applies: 3,
                },                
                period: { 
                    from : '12 October 2017',
                    end : '26 October 2017'
                }, 
                belong_to: this.userA,
                tags: ['keeper', 'cleaning']  
            }, 
            {
                activity_info: {
                    title: 'Cleaner at garage',
                    location: 'Tampere',
                    img: 'https://picsum.photos/200',
                    details: 'Keep the garage clean everyday',
                    requirement: 'cleaning experience at least 1 year',
                },
                worker_info: {
                    number_of_workers: 1,
                    number_of_applies: 3,
                },
                period: { 
                    from : '12 October 2017',
                    end : '26 October 2017'
                },
                belong_to: this.userA, 
                tags: ['garage', 'cleaning']  
            },   
            {
                activity_info: {
                    title: 'Design logo for a startup company',
                    location: 'Oulu',
                    img: 'https://picsum.photos/200',
                    details: 'Design logo for a new startup',
                    requirement: 'no requirement',
                },
                worker_info: {
                    number_of_workers: 1,
                    number_of_applies: 0,
                },
                belong_to: this.userB,
                period: { 
                    from : '20 April 2018',
                    end : '1 May 2018'
                }, 
                tags: ['design', 'logo', 'startup']  
            },    
        ]

        for (let activity of activities) {
            this.activities.push(activity);
        }
    }

    addNewActivity( activity: Activity) {
        this.activities.push(activity);
    }
}