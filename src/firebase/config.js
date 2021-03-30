// npm install firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDo-vrYKU1ksjMJm7JuDW7_gZklyVx7MyM",
    authDomain: "cphweb-vue-firebase.firebaseapp.com",
    projectId: "cphweb-vue-firebase",
    storageBucket: "cphweb-vue-firebase.appspot.com",
    messagingSenderId: "172023285135",
    appId: "1:172023285135:web:ebb014266e26509d1937fa"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }