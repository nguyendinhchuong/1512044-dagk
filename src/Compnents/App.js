import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import store from '../Store';
// import { reduxFirestore, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable

import firebaseConfig from '../Firebase/index';
import Login from '../Compnents/components/LoginPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;
