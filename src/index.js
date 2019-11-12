import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import app from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import firebase from "firebase/app";
import "firebase/auth";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const fbConfig = {
  apiKey: "AIzaSyBgTINIb8EXsm0xYJBDHWrpJ44RgsaIDQU",
  authDomain: "pointaverage-44e7d.firebaseapp.com",
  databaseURL: "https://pointaverage-44e7d.firebaseio.com",
  projectId: "pointaverage-44e7d",
  storageBucket: "pointaverage-44e7d.appspot.com",
  messagingSenderId: "679769712808",
  appId: "1:679769712808:web:27bc0d4096a2feca"
};
const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

const store = createStore(app);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};

const Root = ({ store }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};
render(<Root store={store} />, document.getElementById("root"));
