import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBO0jF6tEqsVZE6AZchSZc6PQScWzM3MJA",
    authDomain: "portfolio-website-340c1.firebaseapp.com",
    databaseURL: "https://portfolio-website-340c1.firebaseio.com",
    projectId: "portfolio-website-340c1",
    storageBucket: "portfolio-website-340c1.appspot.com",
    messagingSenderId: "47548534843",
    appId: "1:47548534843:web:5d54812ebe94ca017e8c1e",
    measurementId: "G-QE9MZQQWG2"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();