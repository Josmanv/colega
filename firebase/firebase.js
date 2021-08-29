import * as app from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './config';

class Firebase{
    constructor(){
        // Initialize Firebase

        // if(!app.apps.length){
        //     app.initializeApp(firebaseConfig);
        // }

        app.initializeApp(firebaseConfig);
        // this.auth = app.auth();
    }
}

const firebase = new(Firebase);
export default firebase;