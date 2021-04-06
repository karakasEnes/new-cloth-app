import React, { Component } from 'react';
import "./menuitem.styles.scss";
import {withRouter} from "react-router-dom";

class MenuItem extends Component {
    clickHandle = () => {
        this.props.history.push(this.props.match.url + this.props.linkUrl);
        // or
        // this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)
    }

    render() {
        const {title, imageUrl, size} = this.props
        return (
            <div 
                className={`${size} menu-item`}
                onClick={this.clickHandle} >
            
            <div className="background-image" 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
                 
            
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">SUBTITLE</span>
                    </div>
        </div>
        )
    }
}

export default withRouter(MenuItem);
