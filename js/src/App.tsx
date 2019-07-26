import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SmartHome} from './SmartHome/SmartHome';

const App: React.FC = () => {
  new SmartHome().run();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        SmartHome
      </header>
    </div>
  );
}

export default App;
