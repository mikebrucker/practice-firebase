import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: "AIzaSyC_ARMwN7VIctD3poF7-DXj991OltoZcDU",
	authDomain: "react-project-practice.firebaseapp.com",
	databaseURL: "https://react-project-practice.firebaseio.com",
	projectId: "react-project-practice",
	storageBucket: "react-project-practice.appspot.com",
	messagingSenderId: "729206185424"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
