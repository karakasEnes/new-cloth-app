import React, { Component } from 'react'
import HomePage from "./pages/homepage/Homepage"
import "./App"
import {Route, Switch} from "react-router-dom";


const HatsPage = () => {
  return (<h1>HatsPage</h1>)
}


export default class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hats" component={HatsPage} />
          </Switch>
        </div>
    )
  }
}



