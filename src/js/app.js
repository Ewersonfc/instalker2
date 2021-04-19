// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.jsx';

//Import Firebase Auth
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";


var firebaseConfig = {
    apiKey: "AIzaSyBfEjsQE3JYqmzhNbRpi9nC80yvpsxKFBk",
    authDomain: "instal-520e3.firebaseapp.com",
    projectId: "instal-520e3",
    storageBucket: "instal-520e3.appspot.com",
    messagingSenderId: "628898765391",
    appId: "1:628898765391:web:308e0c6b5b57e3f474283a",
    measurementId: "G-YEJVC4K25Y"
  };

firebase.initializeApp(firebaseConfig);

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);


