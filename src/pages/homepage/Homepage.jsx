import React from 'react';
import "./homepage.styles.scss";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">TITLE</h1>
                        <span className="content">SUBTITLE</span>
                    </div>
                </div>


                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">TITLE 2</h1>
                        <span className="content">SUBTITLE</span>
                    </div>
                </div>


                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">TITLE</h1>
                        <span className="content">SUBTITLE</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
