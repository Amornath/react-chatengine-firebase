import firebase from "firebase/app"
import "firebase/auth"
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB_mV5K9hC5irc6dxNVuhMiNvwzSz4FKXk",
    authDomain: "newchat-7fd28.firebaseapp.com",
    projectId: "newchat-7fd28",
    storageBucket: "newchat-7fd28.appspot.com",
    messagingSenderId: "347892763706",
    appId: "1:347892763706:web:ed55227dd7058da9df3903"
  }).auth()

