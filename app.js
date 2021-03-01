console.log('Je suis dans le fichier Js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC4PqvpliDLPgxZMOXR418BpBtioRiXGpc",
  authDomain: "test-form-2347e.firebaseapp.com",
  projectId: "test-form-2347e",
  storageBucket: "test-form-2347e.appspot.com",
  messagingSenderId: "472849732922",
  appId: "1:472849732922:web:c60ca9b15271c0932b2c03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");


