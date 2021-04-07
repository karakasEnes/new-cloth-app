import React, { Component } from 'react';
import CustomInput from "../form-input/custom-input";
import CustomButton from "../custom-button/custom-button"
import {signInWithGoogle} from "../../firebase/firebase.utils"

import "./sign-in.styles.scss"

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        }
    }



    handleSubmit = event => {
        event.preventDefault();
        
        
        // this.setState({
        //     email:null,
        //     password:null
        // });

        event.target.reset();
        
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.name] : e.target.value
        });
    }

    render() {
        return (


            <div className="sign-in">

            <h2>I have already an account?</h2>
            <span>Sign In then..</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        required/>

                    <CustomInput 
                        name="password" 
                        type="password" 
                        onChange={this.handleChange}
                        required />
                    
                    
                    <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>

                        <CustomButton 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn={true}>Sign In With Google
                            </CustomButton>
                    </div>
                    
                    
                </form>
                
            </div>
        )
    }
}
