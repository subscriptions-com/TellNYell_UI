import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {InputAdornment, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


class SignUpAsBo extends Component{

constructor(props) {
super(props)
this.state={
first_name:'',
last_name:'',
email_id:'',
password:'',
confirm_password:'',
dateOfBirth:'',
tin:'',
business_contact:'',
type_of_business:'',
business_address:''}
}

onChange=e=>{
    this.setState({[e.target.name]:e.target.value})
}

    onSubmit=e=>{
        console.log("inside submit")
        e.preventDefault();
        console.log("this.state",this.state)
        axios.post('http://52.54.48.30:8080/Tellinyell/tellinyell/user/createBusinessOwner',this.state).then(response=>{
            console.log("response",response)
        }).catch(error=>{
            console.log("error",error)
        })
    }
    render() {

        return (
            <div className="signUp">
                <h4>SIGN UP AS BO</h4>
                <table>
                    <tr><td><TextField  className="loginform"
                                        label="First Name"
                                        defaultValue={this.state.first_name}
                                        inputProps={{ 'aria-black': 'description' }
                                        }

                    onChange={event => {
                              const { value } = event.target;
                              console.log("first_name",value)
                              this.setState({ first_name: value });
                            }}/>

                            </td></tr>
                    <tr><td><TextField  className="loginform" label="Last Name"   onChange={event => {
                        const { value } = event.target;
                        console.log("last_name",value)
                        this.setState({ last_name: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="E mail"    onChange={event => {
                        const { value } = event.target;
                        console.log("email_id",value)
                        this.setState({ email_id: value });
                    }} /></td></tr>
                    <tr><td><TextField  className="loginform" type="password"
                                        label="Password"
                                        inputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="toggle password visibility">
                                                        <EmailIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                            maxLength: 120,
                                        }}

                                        onChange={event => {
                        const { value } = event.target;
                        console.log("password",value)
                        this.setState({ password: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform" type="password" label="Confirm Password"    onChange={event => {
                        const { value } = event.target;
                        console.log("confirm_password",value)
                        this.setState({ confirm_password: value });
                    }}/></td></tr>
                    <div className="margin-dist"><td>DOB</td><tr><td><TextField  type="date" className="loginform"    onChange={event => {
                        const { value } = event.target;
                        const displayDate =value.toString().split("-").reverse().join("-");
                        this.setState({ dateOfBirth: displayDate });
                    }}/></td></tr></div>
                    <tr><td><TextField  className="loginform"  label="EIN Number"    onChange={event => {
                        const { value } = event.target;
                        console.log("tin",value)
                        this.setState({ tin: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="Business Contact"    onChange={event => {
                        const { value } = event.target;
                        console.log("business_contact",value)
                        this.setState({ business_contact: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="Type Of Business"    onChange={event => {
                        const { value } = event.target;
                        console.log("type_of_business",value)
                        this.setState({ type_of_business: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="Business Address"    onChange={event => {
                        const { value } = event.target;
                        console.log("business_address",value)
                        this.setState({ business_address: value });
                    }}/></td></tr>
                    <tr></tr>
                    <div className="margin-dist"><tr><td className="submit"><Button  variant="contained" color="primary" onClick={this.onSubmit}>
                        SUBMIT
                    </Button></td></tr></div>

                </table>

            </div>

        );
    }}
export default SignUpAsBo;