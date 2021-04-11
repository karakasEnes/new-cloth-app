import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherCustomProps}) => {
    return (
        <button 

        className={`
        ${inverted ? "inverted" : ""}
        ${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`} 
        
        {...otherCustomProps}> 
            
            {children}
        </button>
    )
}

export default CustomButton;