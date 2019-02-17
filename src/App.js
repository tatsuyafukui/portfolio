import React, { Component } from 'react';
import Home from './templates/home/HomeContainer';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Home />
						</div>
    );
  }
}

export default App;
