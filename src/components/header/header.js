import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./header.styles.scss"
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux";
import CardIcon from "../card-icon/card-icon";
import CardDropdown from "../card-dropdown/card-dropdown";

import {createStructuredSelector} from "reselect";
import {selectCardHidden} from "../../reducers/card-reducer/card.selector"
import {selectCurrentUser} from "../../reducers/user-reducer/user.Selector"
const Header = ({currentUser, hidden}) => {

    return (
        <div className="header">
                <Link to="/" className="logo-container">
                        <Logo className="logo" />
                </Link>

                <div className="options">
                    <Link className="option" to="shop">SHOP</Link>
                    <Link className="option" to="contact">CONTACT</Link>
                    
                    {
                        currentUser ? 
                        <div className="option"
                            onClick={() => auth.signOut() }>SIGN OUT</div>
                        :
                        <Link 
                            className="option" 
                            to="signin">SIGN IN</Link>
                    }

                    <CardIcon />

                </div>


                {
                    hidden ? null : <CardDropdown />
                }
                
                
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
})

export default connect(mapStateToProps)(Header);