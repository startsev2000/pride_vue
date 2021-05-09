import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAD6ClEh6wi6CsbYP6maWQb5Uw8uxnSoQg",
    authDomain: "pride-6eb70.firebaseapp.com",
    projectId: "pride-6eb70",
    storageBucket: "pride-6eb70.appspot.com",
    messagingSenderId: "939650369258",
    appId: "1:939650369258:web:34881e74c55e459c34f993"
};
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const usersCollection = db.collection('users')
const newsCollection = db.collection('news')
const workersCollection = db.collection('workers')

export {
    db,
    auth,
    usersCollection,
    newsCollection,
    workersCollection
}