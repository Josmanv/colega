import * as app from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './config';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Router from "next/router";

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);
    }

    async login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Router.push('/');
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

    // Cerrar sesión del usuario
    async cerrarSesion(){
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }
}

export const firebase = new(Firebase);