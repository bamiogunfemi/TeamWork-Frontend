import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAYjPpBL8jyWErKABGrrsSU-gb-VrlsydQ",
  authDomain: "teaamwork-f4fcf.firebaseapp.com",
  databaseURL: "https://teaamwork-f4fcf.firebaseio.com",
  projectId: "teaamwork-f4fcf",
  storageBucket: "teaamwork-f4fcf.appspot.com",
  messagingSenderId: "89009109640",
  appId: "1:89009109640:web:ad1a3c63e195e09d513d3d",
  measurementId: "G-Y6DKQ70J2R"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const createUserProfileDoc = async (userAuth, additionalData)=>{
  if (!userAuth) return;
  
}
export const auth = firebase.auth();
export const firestore = firebase.firestore()

