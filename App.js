import React from 'react';
import './App.css';
import Homescreen from "./HomePage/Homescreen";
import SignUpForm from "./HomePage/SignUpForm";
import LogInForm from "./HomePage/LogInForm";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginAsBo from "./HomePage/LoginAsBo";
import SignUpAsBo from "./HomePage/SignUpAsBo";

function App() {


  return (
    <div className="background_img" >
        <Router basename={'/tellnyell'}>
            <div>
                <Switch>
                    <Route exact path='/home' component={Homescreen} />
                    <Route exact path='/login/user' component={LogInForm} />
                    <Route exact path='/signUp/user' component={SignUpForm} />
                    <Route exact path='/signUp/BO' component={SignUpAsBo} />
                    <Route exact path='/login/BO' component={LoginAsBo} />




                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
