import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, ...otherCustomProps}) => {
    return (
        <button className="custom-button" {...otherCustomProps}> 
                {children}
        </button>
    )
}

export default CustomButton;