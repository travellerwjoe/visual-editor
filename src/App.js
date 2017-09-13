import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from './Components/Container'
import logo from './logo.svg';
import './App.css';

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */
/* const App = () => {
  <MuiThemeProvider>
      <Container />
  </MuiThemeProvider>
} */

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Container />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
