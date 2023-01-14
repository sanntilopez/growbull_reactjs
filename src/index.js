import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



const firebaseConfig = {
  apiKey: "AIzaSyDcZH5hcWkVoLOTDWXgVXseK4sIZ9IwJ8Q",
  authDomain: "grow-bull-51b42.firebaseapp.com",
  projectId: "grow-bull-51b42",
  storageBucket: "grow-bull-51b42.appspot.com",
  messagingSenderId: "274649307657",
  appId: "1:274649307657:web:480f68067892e5ab3736d8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
