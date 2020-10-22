import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import MaterialUIPickers from './DatePicker';

class SignUpForm extends Component{


    render() {

        return (
            <div className="signUp">
                <h2>SIGN UP</h2>
               <table>
                   <tr><td><TextField  className="loginform" label="First Name" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform" label="Last Name" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="E mail" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="Password" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="Confirm Password" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="PhoneNumber" variant="outlined" /></td></tr>
                   <tr><td><TextField  className="loginform"  label="Zipcode" variant="outlined" /></td></tr>
                   <tr><td><MaterialUIPickers className="loginform"/></td></tr>
                   <tr><td><TextField className="loginform"
                                  label="Privacy Policy"
                                   placeholder="Privacy Policy"
                       multiline
                       rows={25}
                       rowsMax={15}
                   /></td></tr>
                   <tr><td><Checkbox/><label>Agree</label>
                       <Checkbox/><label>Disagree</label></td></tr>
                   <td>
                   </td>
                   <tr><td><Button variant="contained" color="primary">
                       SIGNUP
                   </Button></td></tr>




               </table>

            </div>

        );
    }}
export default SignUpForm;