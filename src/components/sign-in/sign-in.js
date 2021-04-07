import React, { Component } from 'react'

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
        console.log(this.state);
        
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
                    <input 
                    name="email" 
                    type="email" 
                    onChange={this.handleChange}
                    
                    required


                    />
                    <label>Email</label>

                    <input name="password" type="password" onChange={this.handleChange} />
                    <label>Password</label>

                    <input type="submit" value= "Submit Form" />
                </form>
                
            </div>
        )
    }
}
