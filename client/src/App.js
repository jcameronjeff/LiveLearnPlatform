import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AddStudents from './components/students/AddStudents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Scores from './components/students/Scores';
import StudentDetails from './components/students/StudentDetails';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/students/add' component={AddStudents}/>
                <Route exact path='/student/:id' component={StudentDetails}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;