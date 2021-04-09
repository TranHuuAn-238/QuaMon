import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import firebase from 'firebase/app';

//const firebase = require('firebase/app');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyApIzwkPQc0Qt7cFndQVpeXUX7cQ2c3BCU",
    authDomain: "my-chat-application-5e79a.firebaseapp.com",
    projectId: "my-chat-application-5e79a",
    storageBucket: "my-chat-application-5e79a.appspot.com",
    messagingSenderId: "203487750854",
    appId: "1:203487750854:web:f400075832c48915b485c7",
    measurementId: "G-XG6ZKWKRQ0"
});

const routing = (
  <Router>
    <div id='routing-container'> 
        <Route path='/login'component ={LoginComponent}></Route>
        <Route path='/signup'component ={SignupComponent}></Route>
        <Route path='/dashboard'component ={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
