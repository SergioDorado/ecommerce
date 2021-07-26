import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAa1k1BoKS8oYDNyVnYoAsSr5QHLFRuLdQ",
  authDomain: "utnproject.firebaseapp.com",
  projectId: "utnproject",
  storageBucket: "utnproject.appspot.com",
  messagingSenderId: "909743290273",
  appId: "1:909743290273:web:0ca5995cb6850f04877de0"
};

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth()
firebase.db = firebase.firestore()

export default firebase