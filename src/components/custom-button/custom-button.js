import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...otherCustomProps}) => {
    return (
        <button 

        className={`${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`} 
        
        {...otherCustomProps}> 
            
            {children}
        </button>
    )
}

export default CustomButton;