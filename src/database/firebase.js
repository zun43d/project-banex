import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCiXC7j1MbDcQzZpZWJYxsSbqLCzhzPHAs',
	authDomain: 'banex-cad0f.firebaseapp.com',
	projectId: 'banex-cad0f',
	storageBucket: 'banex-cad0f.appspot.com',
	messagingSenderId: '412060215009',
	appId: '1:412060215009:web:ea51f0a33c73ce1e9579a0',
};
// Initialize Firebase
export const firebaseDB = firebase.initializeApp(firebaseConfig);
