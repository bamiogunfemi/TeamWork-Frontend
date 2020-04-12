import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// eslint-disable-next-line
import tachyons from "tachyons";

const firebaseConfig = {
  apiKey: "AIzaSyAYjPpBL8jyWErKABGrrsSU-gb-VrlsydQ",
  authDomain: "teaamwork-f4fcf.firebaseapp.com",
  databaseURL: "https://teaamwork-f4fcf.firebaseio.com",
  projectId: "teaamwork-f4fcf",
  storageBucket: "teaamwork-f4fcf.appspot.com",
  messagingSenderId: "89009109640",
  appId: "1:89009109640:web:ad1a3c63e195e09d513d3d",
  measurementId: "G-Y6DKQ70J2R",
};

const rrfConfig = {
  //users data will be stored in firestore
  userProfile: "users",
  useFirestoreForProfile: true,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//initialise firestore
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
