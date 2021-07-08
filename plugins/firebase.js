import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDud_CR1KxSYNSoFpgr8DwocYTAJ3kf-JE",
      authDomain: "staff-app-29611.firebaseapp.com",
      projectId: "staff-app-29611",
      storageBucket: "staff-app-29611.appspot.com",
      messagingSenderId: "447948074851",
      appId: "1:447948074851:web:e2bd1c04c1c62fb4d8ed56",
      measurementId: "G-V6KMFY0YDB"
    }
  )
}

export default firebase