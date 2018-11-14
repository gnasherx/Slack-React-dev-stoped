import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCnVvq-2yHsT7Wj_lVQJ3_PSBD11VqVCaw",
  authDomain: "slack-react-c7031.firebaseapp.com",
  databaseURL: "https://slack-react-c7031.firebaseio.com",
  projectId: "slack-react-c7031",
  storageBucket: "slack-react-c7031.appspot.com",
  messagingSenderId: "578116454280"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
