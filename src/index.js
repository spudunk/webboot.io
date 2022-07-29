import { initializeApp } from "firebase/app";
import { getDatabase, ref, push} from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";

// See: https://firebase.google.com/docs/web/learn-more#config-object
// config settings for firebase
const firebaseConfig = {
  apiKey: "AIzaSyCn_-F6k3NFsa3EqyeZZVhAFhP49hHZ0l4",
  authDomain: "webboot-website.firebaseapp.com",
  databaseURL: "https://webboot-website-default-rtdb.firebaseio.com",
  projectId: "webboot-website",
  storageBucket: "webboot-website.appspot.com",
  messagingSenderId: "843475817985",
  appId: "1:843475817985:web:e462b4e934a9444eead200",
  measurementId: "G-QCR1Q65FF5",
  databaseURL: "https://webboot-website-default-rtdb.firebaseio.com/",
};



const reCaptchaKey = "6LcaiSchAAAAAGCbEDLOdj7055zB60p21wrgdg1T";
// PRIVATE KEY only for development
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = '76512c7a-506a-4748-b7b9-2a34e875b42f';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);



// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, { 
  provider: new ReCaptchaV3Provider(reCaptchaKey),

  // Optional argument. If true, the SDK automatically refreshes App Check tokens as needed.
  isTokenAutoRefreshEnabled: true
});



// listen for contact form submit

const contactForm = document.getElementById('contact-form')
contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getInputVal('email');

  push(ref(db,'form-entries'),{
    email: email
  })


  // var name = getInputVal('name');
  // var phone = getInputVal('phone');
  // var company = getInputVal('company');
  // var message = getInputVal('message');

  contactForm.reset();

  return;
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

