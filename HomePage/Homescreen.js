import React, {Component} from "react";
import logo from "../logo.svg";
import LogIn from "./Login";
import SignUp from "./SignIn";
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class HomeScreen extends Component{


    render() {

        return (
            <div  >

                <div className="App"  >
                    <header className="home-icon">

                    </header>

                </div>
                <div className="login-button">
                    <header>
                        <LogIn/>
                    </header>

                </div>
                <div className="signin-button">
                    <header>
                        <SignUp/>
                    </header>
                </div>
                <div>   <img src={logo} className="App-logo" alt="logo" /></div>
                <div className="search">
                    <MuiThemeProvider>
                        <SearchBar/></MuiThemeProvider>
                </div>

            </div>

        );
    }}
export default HomeScreen;