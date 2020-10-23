import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class LoginAsBo extends Component{


    render() {

        return (

            <div className="logIn">
                <h4>LOG IN AS BO</h4>


                    <tr><td><TextField  className="loginform"  label="E mail" /></td></tr>
                    <tr><td><TextField  className="loginform"  label="Password"  /></td></tr>
                <div className="margin-dist"><tr><Button variant="contained" color="primary">
                        LOGIN AS BO
                    </Button><Button  color="primary">
                        Forgot Password
                </Button></tr></div>




            </div>

        );
    }}
export default LoginAsBo;