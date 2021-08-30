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
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            if(errorCode === "auth/invalid-email"){
                alert ("Este email no está registrado");
            }else if(errorCode === "auth/wrong-password"){
                alert ("Esa contraseña no es, majete");
            }
        });
    }
}

export const firebase = new(Firebase);