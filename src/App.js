import React, { Component } from 'react';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <React.Fragment className="text-center">
        <Navbar />
        <div className="container">
          <h1 className="display-4">Welcome To Automatic-CRM</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
