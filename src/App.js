import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Dashboard from './components/Dashboard'
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login'
import Forgetpwd from "./components/ForgetPassword";
import RecoveryQuestion from './components/question';
import Goals from './components/goals';


class App extends Component {
  render() { 
  return (
  
     <Router>
        <Switch>      
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/forgetpwd" component={Forgetpwd}></Route>
          <Route exact path="/securityquestion" component ={RecoveryQuestion}></Route>
          <Route exact path="/goals" component={Goals}></Route>
          
        </Switch>
      </Router>
  );
}}
export default App;
 


