import React, { Component } from 'react'
import HomePage from "./pages/homepage/Homepage"
import "./App.css";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";
import Header from "./components/header/header";
import SignInAndOutPage from "./pages/signInAndSignOutPage/sign-in-out-page"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("component mounted");

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

      }

      this.setState({currentUser: userAuth})

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
        <div className="App">
          <Header currentUser={this.state.currentUser}/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndOutPage} />
            </Switch>
        </div>
    )
  }
}



