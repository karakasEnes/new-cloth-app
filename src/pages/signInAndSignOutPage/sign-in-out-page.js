import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/SignUp";
import "./sign-in-out-page.styles.scss";

const SignInAndOutPage = () => {
    return (
        <div className="sign-in-out-page">

                <SignIn />
                <SignUp />
            
        </div>
    )
}

export default SignInAndOutPage;