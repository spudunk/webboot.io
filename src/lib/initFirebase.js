
// FIREBASE Import needed functions from the SDKs 
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ReCAPTCHA for Firebase
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";


// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn_-F6k3NFsa3EqyeZZVhAFhP49hHZ0l4",
  authDomain: "webboot-website.firebaseapp.com",
  databaseURL: "https://webboot-website-default-rtdb.firebaseio.com",
  projectId: "webboot-website",
  storageBucket: "webboot-website.appspot.com",
  messagingSenderId: "843475817985",
  appId: "1:843475817985:web:34c4c2ab301ef7baead200",
  measurementId: "G-B9SHQMQNLR"
};

const recaptchaKey = "6LcaiSchAAAAAGCbEDLOdj7055zB60p21wrgdg1T"


// TODO: Fix this
// Not working, code supposed to be for server. How does this work with Firebase?
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.APPCHECK_DEBUG_TOKEN;
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;


 export const app = initializeApp(firebaseConfig);
  
  // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
  // key is the counterpart to the secret key you set in the Firebase console.
  // const appCheck = initializeAppCheck(app, {
  //   provider: new ReCaptchaV3Provider(recaptchaKey),
  
  //   // Optional argument. If true, the SDK automatically refreshes App Check
  //   // tokens as needed.
  //   isTokenAutoRefreshEnabled: true
  // });
  
  // Initialize Firebase if it is supported (not in Dev environment)
  export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

  export const db = getDatabase(app);


