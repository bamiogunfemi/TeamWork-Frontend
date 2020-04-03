import firebase from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {
      firstName,
      lastName,
      password,
      email,
      confirmPassword,
      jobRole,
      gender,
      address
    } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        firstName,
        lastName,
        password,
        email,
        confirmPassword,
        jobRole,
        gender,
        address,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
