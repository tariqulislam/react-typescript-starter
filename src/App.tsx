import * as React from 'react';
import './App.css';

import logo from './logo.svg';
// Import SmartComponent to App.js File
import SmartComponent from './components/SmartComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {/* Remove the code and add the SmartComponent to App.js File */}
         <SmartComponent name="Tariqul Isalm" address="Test Address" />
        </p>
      </div>
    );
  }
}

export default App;
