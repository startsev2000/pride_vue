import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

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
const employeesCollection = db.collection('employees')

export const addEmployee = employee => {
    return employeesCollection.add(employee)
}


createApp(App).use(router).mount('#app')
