import { firebase } from 'firebase'

// import 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyCr4D6MyxLpohfNCk2FgV5QaflW3NkjR1w',
	authDomain: 'my-portfolio-web-site.firebaseapp.com',
	projectId: 'my-portfolio-web-site',
	storageBucket: 'my-portfolio-web-site.appspot.com',
	messagingSenderId: '643130005078',
	appId: '1:643130005078:web:0db0220a8aa8906f12cdf7',
	measurementId: 'G-DJYXXV4J3E'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db

//==================================================================

// firebase.initializeApp(firebaseConfig)
// const databaseRef = firebase.database().ref()
// export const notesRef = databaseRef.child('my Portfolio Web Site')
// export default firebase
