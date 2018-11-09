import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      {
      //<Route path='/log_management' component={}/>
      }
    </Switch>
  </main>
)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
