import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

class LoginAsBo extends Component{


    render() {

        return (

            <div className="logIn">
                <h2>LOG IN AS BO</h2>


                    <tr><td><TextField  className="loginform"  label="E mail" variant="outlined" /></td></tr>
                    <tr><td><TextField  className="loginform"  label="Password" variant="outlined" /></td></tr>
                    <tr><Button variant="contained" color="primary">
                        LOGIN AS BO
                    </Button><Button  color="primary">
                        Forgot Password
                    </Button></tr>




            </div>

        );
    }}
export default LoginAsBo;