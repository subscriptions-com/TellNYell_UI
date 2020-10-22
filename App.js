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
    <div className="backcolor">
        <Router>
            <div>
                <Switch>
                    <Route exact path='/tellnyell/home' component={Homescreen} />
                    <Route exact path='/tellnyell/login/user' component={LogInForm} />
                    <Route exact path='/tellnyell/signUp/user' component={SignUpForm} />
                    <Route exact path='/tellnyell/signUp/BO' component={SignUpAsBo} />
                    <Route exact path='/tellnyell/login/BO' component={LoginAsBo} />




                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
