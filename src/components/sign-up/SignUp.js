import React, { Component } from 'react';
import CustomInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"
import "./SignUp.styles.scss";

export default class SignUp extends Component {

    state = {
        displayName: null,
        email: null,
        password:null,
        confirmPassword: null
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        

        if (password !== confirmPassword) {
            alert("password don't match, try again please!");
            return;
        }


        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            e.target.reset();
            
            } catch (error) {
                alert(error);

            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        
        return (
            <div className="sign-up">

                <h2 className="title">You don't have an account?</h2>
                <span>then go for it...</span>

                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        type="text"
                        name="displayName"
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomInput 
                        type="email"
                        name="email"
                        handleChange={this.handleChange} 
                        required                       
                    />
                    <CustomInput 
                        type="password"
                        name="password"
                        handleChange={this.handleChange}  
                        required                      
                    />
                    <CustomInput 
                        type="password"
                        name="confirmPassword"
                        handleChange={this.handleChange}  
                        required                      
                    />

                    <CustomButton> SING UP </CustomButton>

                </form>


                
            </div>
        )
    }
}

