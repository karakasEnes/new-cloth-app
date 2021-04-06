import React, { Component } from 'react'
import HomePage from "./pages/homepage/Homepage"
import "./App.css";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/shop";




export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </div>
    )
  }
}



