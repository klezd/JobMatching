import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signIn(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(
            credentials.username,
            credentials.password
        );
	}

	signUp(data) {
		console.log('Sign up with email');
		return this.afAuth.auth.createUserWithEmailAndPassword(
            data.user_info.email,
            data.password
        );
	}

}