import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDKSzJgdyG86tX3tYn7hPXEs9IHrdiJRO8",
    authDomain: "notereactfedu-3913a.firebaseapp.com",
    databaseURL: "https://notereactfedu-3913a.firebaseio.com",
    projectId: "notereactfedu-3913a",
    storageBucket: "notereactfedu-3913a.appspot.com",
    messagingSenderId: "665889532746",
    appId: "1:665889532746:web:38bf1ebccf59c6e7aa6fb3",
    measurementId: "G-LZZB1NFC1B"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const noteData =firebase.database().ref('dataForNote'); 