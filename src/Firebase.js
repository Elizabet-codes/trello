import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config={
    apiKey: "AIzaSyDkZ2rdeE_HT7bZgv8o5yT7bfaoRbeaqy4",
    authDomain: "react-trello-2-3404c.firebaseapp.com",
    databaseURL: "https://react-trello-2-3404c.firebaseio.com",
    projectId: "react-trello-2-3404c",
    storageBucket: "react-trello-2-3404c.appspot.com",
    messagingSenderId: "393941606777",
    appId: "1:393941606777:web:09c66cfd18896fdbf20fa8",
    measurementId: "G-35BTM1ZKJX"
}


firebase.initializeApp(config)


const db=firebase.firestore()
const firebaseAuth=firebase.auth()


const boardsRef=db.collection('boards')
const listsRef=db.collection('lists')
const cardsRef=db.collection('cards')

export{boardsRef, listsRef, cardsRef, firebaseAuth}