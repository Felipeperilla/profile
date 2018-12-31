import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyDccS1uxHGVs7W9m5lBqIv6A6X9jWgxLQQ",
  authDomain: "portfolio-ecae0.firebaseapp.com",
  databaseURL: "https://portfolio-ecae0.firebaseio.com",
  projectId: "portfolio-ecae0",
  storageBucket: "portfolio-ecae0.appspot.com",
  messagingSenderId: "371856536960"
}; 
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase