import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class LogInForm extends Component{


    render() {

        return (

            <div className="logIn">
                <h2>LOG IN</h2>

                <table>
                   <tr><td><TextField  className="loginform"  label="Email" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="Password" variant="outlined" /></td></tr>
                   <tr><Button variant="contained" color="primary">
                       LOGIN
                   </Button><Button  color="primary">
                       Forgot Password
                   </Button></tr>


               </table>

            </div>

        );
    }}
export default LogInForm;