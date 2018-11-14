import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import teamReducer from "./teamReducer";
import channelReducer from "./channelReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  newteam: teamReducer,
  channel: channelReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducers;
