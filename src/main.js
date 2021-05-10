import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { onUnmounted, ref } from 'vue'


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
const newsCollection = db.collection('news')


export const addEmployee = employee => {
    return employeesCollection.add(employee)
}

export const addNews = news => {
    return newsCollection.add(news)
}


export const getEmployee = async id => {
    const employee = await employeesCollection.doc(id).get()
    return employee.exists ? employee.data() : null
}


export const updateEmployee = (id, employee) => {
    return employeesCollection.doc(id).update(employee)
}

export const updateNews = (id, news) => {
    return newsCollection.doc(id).update(news)
}


export const deleteEmployee = id => {
    return employeesCollection.doc(id).delete()
}
export const deleteNews = id => {
    return newsCollection.doc(id).delete()
}


export const loadEmployees = () => {
    const employees = ref([])
    const close = employeesCollection.onSnapshot(snapshot => {
        employees.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return employees
}

export const loadNews = () => {
    const news = ref([])
    const close = employeesCollection.onSnapshot(snapshot => {
        news.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return news
}

createApp(App).use(router).mount('#app')
