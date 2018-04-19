//fake data (providers)

import { Injectable } from '@angular/core';

import { User } from '../../model/user.model';
@Injectable()
export class Users {
    users: User[] = [];

    constructor() {
        let users = [
            { 
                username: 'userA',
                password:'som3P@ssword',
                user_info: {
                    name: 'userA name', 
                    phone: '01234567', 
                    email: 'userA@mail.com',                    
                }
            },
            {
                username: 'userB', 
                password:'som3P@ssword',
                user_info: {                    
                    name: 'userB name', 
                    phone: '01234567', 
                    email: 'userB@mail.com',                     
                }                
            },            
        ]

        for (let user of users) {
            this.users.push(user);
        }
    }

    newUser(user: User){
        this.users.push(user);
    }
}