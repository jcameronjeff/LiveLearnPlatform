import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

//reducers

const firebaseConfig = {
    apiKey: "AIzaSyAQYM1WvRrSZoiow0KcBdwtC4S_U0Vwd5M",
    authDomain: "elearnlive-jc.firebaseapp.com",
    databaseURL: "https://elearnlive-jc.firebaseio.com",
    projectId: "elearnlive-jc",
    storageBucket: "elearnlive-jc.appspot.com",
    messagingSenderId: "72361021877"
};

//react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    userFirestoreForProfile: true //Firestore for profile instead of RealtimeDB
}
//init firebase instance
firebase.initializeApp(firebaseConfig);

// initFirestore
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);
//reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
        reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer, firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;