import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
const persistConfig = {
  key: "root",
  storage,
 
};
const rootReducer = combineReducers({
  
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
export default persistReducer(persistConfig, rootReducer);
