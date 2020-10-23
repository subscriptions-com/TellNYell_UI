import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class LogInForm extends Component{


    render() {

        return (

            <div className="logIn">
                <h4>LOG IN</h4>

                <table>
                   <tr><td><TextField  className="loginform"  label="Email"  /></td></tr>
                   <tr><td><TextField  className="loginform"  label="Password"  /></td></tr>
                    <div className="margin-dist"><tr><Button variant="contained" color="primary">
                       LOGIN
                   </Button><Button  color="primary">
                       Forgot Password
                    </Button></tr></div>


               </table>

            </div>

        );
    }}
export default LogInForm;