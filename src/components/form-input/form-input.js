import React from "react";
import "./custom-input.styles.scss"
const CustomInput = ({handleChange, label, ...otherCustomProps}) => {
    

    return(
        <div className="group">
            <input 
                className="form-input" 
                onChange={handleChange} 
                {...otherCustomProps} />

            {
                label ?
                    <label className={`${otherCustomProps.currentValue.length ? "shrink" : ""} form-input-label`}>

                    </label>
                :
                null
            }

        
        </div>
    )
}

export default CustomInput