import * as app from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";

class Firebase{
    constructor(){
        // Initialize Firebase

        // if(!app.apps.length){
        //     app.initializeApp(firebaseConfig);
        // }

        app.initializeApp(firebaseConfig);
    }

    async login(email, password){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Router.push('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
}

export const firebase = new(Firebase);