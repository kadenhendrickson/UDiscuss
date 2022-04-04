import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';

/*
 * Represents a post's body
 *  
 * */
export class ProfileInformation extends Component {
    static displayName = ProfileInformation.name;


    constructor(props) {
        super(props);
        this.state = { name: this.props.name, email: this.props.email };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit(event) {
        alert("Full name: " + this.state.name + "\nEmail: " + this.state.email + "\nInsert successful changes into DB here");
        event.preventDefault();
    }

    handleInputChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name] : val });
    }

    render() {
        return (
            <div className="options-box secondary-color w-50 m-2">
                <h4 className="d-flex justify-content-center p-2"> Profile Information </h4>
                <br />
                <div className="w-50 d-flex justify-content-center" style={{ margin: '0 auto', position: 'relative' }}>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{ float: 'right' }}>
                            Full Name: &emsp;
                            <input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleInputChange} />
                        </label>
                        <br />
                        <br />

                        <label style={{ float: 'right' }}>
                            Email: &emsp;
                            <input
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </label>


                        <br />
                        <br />


                        <p className="text-danger" style={{ 'text-align': 'center' }}> Change Password </p>
                        <input className="mb-3 w-100 options-save-button" type="submit" value="Save" />
                    </form>
                </div>


            </div>
        );
    }
}