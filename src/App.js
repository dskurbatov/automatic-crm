import React, { Component } from 'react';
import Navbar from './components/Navbar'
import ProgressBar from './components/ProgressBar'
import Corporate from './components/Corporate'
import Personal from './components/Personal'
import SalesForce from './components/SalesForce'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    settings: {
      isCorporateSet: false,
      isPersonalSet: false,
      isSalesForceSet: false
    },
    active: {}
  }

  setActive = (key) => {
    this.setState({
      active: {
        [key]: true
      }
    })
  }
  
  onSubmit = (key) => (value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        settings: {
          ...prevState.settings,
          [key]: value
        }
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          {/* <h1 className="display-4">Welcome To Automatic-CRM</h1> */}
          <ProgressBar settings={this.state.settings} active={this.state.active}/>
          <Router>
            <div>
              <Route 
                exact path='/' 
                render={(props) => <Corporate {...props} onSubmit={this.onSubmit('isCorporateSet')} setActive={this.setActive} />}
              />
              <Route
                path='/personal'
                render={(props) => <Personal {...props} onSubmit={this.onSubmit('isPersonalSet')} setActive={this.setActive} />}
                />
              <Route 
                path='/salesforce'
                render={(props) => <SalesForce {...props} onSubmit={this.onSubmit('isSalesForceSet')} setActive={this.setActive} />}
              />
              <Route 
                path='/analysis'
                render={(props) => <div><h1 className="display-4">Congratulation You are Done!!!</h1></div>}
              />
              </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
