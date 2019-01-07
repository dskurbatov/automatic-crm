import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Corporate from './components/Corporate'
import Personal from './components/Personal'
import SalesForce from './components/SalesForce'
import Analysis from './components/Analysis'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    settings: {
      isCorporateSet: false,
      isPersonalSet: false,
      isSalesForceSet: false,
      isAnalysisSet: false
    },
    active: {},
    users: {
      corporate: {},
      personal: {},
      salesforce: {}
    }
  }

  setActive = (key) => {
    this.setState({
      active: {
        [key]: true
      }
    })
  }

  setUser = (type) => (value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        users: {
          ...prevState.users,
          [type]: value
        }
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
          <Router>
            <React.Fragment>
              <Route 
                exact path="/"
                render={props => <Profile {...props} />}
              />
              <Route 
                path='/corporate' 
                render={(props) => <Corporate {...props} onSubmit={this.onSubmit('isCorporateSet')} setActive={this.setActive} setUser={this.setUser('corporate')} />}
              />
              <Route
                path='/personal'
                render={(props) => <Personal {...props} onSubmit={this.onSubmit('isPersonalSet')} setActive={this.setActive} setUser={this.setUser('personal')} />}
                />
              <Route 
                path='/salesforce'
                render={(props) => <SalesForce {...props} onSubmit={this.onSubmit('isSalesForceSet')} setActive={this.setActive} />}
              />
              <Route 
                path='/analysis'
                render={(props) => <Analysis {...props} setActive={this.setActive} />}
              />
            </React.Fragment>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
