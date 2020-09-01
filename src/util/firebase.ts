import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_APIKEY,
  appId: import.meta.env.SNOWPACK_PUBLIC_APPID,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_AUTHDOMAIN,
  databaseURL: import.meta.env.SNOWPACK_PUBLIC_DATABASEURL,
  measurementId: import.meta.env.SNOWPACK_PUBLIC_MEASUREMENTID,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_MESSAGINGSENDERID,
  projectId: import.meta.env.SNOWPACK_PUBLIC_PROJECTID,
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_STORAGEBUCKET,
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();