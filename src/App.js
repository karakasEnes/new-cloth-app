import React, { Component } from 'react'
import HomePage from "./pages/homepage/Homepage"
import "./App.css";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import SignInAndOutPage from "./pages/signInAndSignOutPage/sign-in-out-page"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

import { connect } from "react-redux";
import { setCurrentUser } from './reducers/user-reducer/userAction';

class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    console.log("component mounted");
    const {setCurrentUserProp} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUserProp({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }

      setCurrentUserProp(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndOutPage} />
            </Switch>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUserProp : user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App)

