import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {InputAdornment, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
class SignUpAsBo extends Component{

constructor(props)
{
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
business_address:''
}
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
                <h2>SIGN UP AS BO</h2>
                <table>
                    <tr><td><TextField  className="loginform" label="First Name" variant="outlined" defaultValue={this.state.first_name}

                    onChange={event => {
                              const { value } = event.target;
                              console.log("first_name",value)
                              this.setState({ first_name: value });
                            }}/>

                            </td></tr>
                    <tr><td><TextField  className="loginform" label="Last Name" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("last_name",value)
                        this.setState({ last_name: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="E mail" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("email_id",value)
                        this.setState({ email_id: value });
                    }} /></td></tr>
                    <tr><td><TextField  className="loginform" type="password"
                                        label="Password" variant="outlined"
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
                    <tr><td><TextField  className="loginform" type="password" label="Confirm Password" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("confirm_password",value)
                        this.setState({ confirm_password: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="DOB" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("dateOfBirth",value)
                        this.setState({ dateOfBirth: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="EIN Number" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("tin",value)
                        this.setState({ tin: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="business_contact" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("business_contact",value)
                        this.setState({ business_contact: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="type_of_business" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("type_of_business",value)
                        this.setState({ type_of_business: value });
                    }}/></td></tr>
                    <tr><td><TextField  className="loginform"  label="business_address" variant="outlined"   onChange={event => {
                        const { value } = event.target;
                        console.log("business_address",value)
                        this.setState({ business_address: value });
                    }}/></td></tr>
                    <tr><td><Button variant="contained" color="primary" onClick={this.onSubmit}>
                        SIGNUP AS BO
                    </Button></td></tr>

                </table>

            </div>

        );
    }}
export default SignUpAsBo;