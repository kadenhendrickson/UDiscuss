import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';

/*
 * Represents a post's body
 *  
 * */
export class EmailNotifications extends Component {
    static displayName = EmailNotifications.name;


    constructor(props) {
        super(props);
        this.state = { emailType: this.props.emailType, howOften: this.props.howOften, receiveAnnouncements: this.props.receiveAnnouncements };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit(event) {
        alert('emailType: ' + this.state.emailType + '\n No more than one per: ' + this.state.howOften
            + 'receiveAnnouncements: ' + this.state.receiveAnnouncements);
        event.preventDefault();
    }

    handleInputChange(event) {
        const testing = event.target.tagName;
        const target = event.target;
        let value;
        const name = target.name;
        // Check if it was the checkbox or not.
        if (target.type === 'checkbox') {
            value = target.checked;
        }
        else
        {
            // Must be one of the dropdowns.
            value = target.value;
        }
        

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="options-box secondary-color w-50 m-2">
                <h4 className="d-flex justify-content-center p-2"> Email Notifications </h4>
                <br />
                <div className="w-50 d-flex justify-content-center" style={{ margin: '0 auto', position: 'relative' }}>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{ float: 'right' }}>
                            Type: &emsp;

                            <select value={this.state.emailType} name="emailType" onChange={this.handleInputChange}>
                                <option value="none">None</option>
                                <option value="self-and-instructors">Instructors and Mine Only</option>
                                <option value="self">Mine Only</option>
                                <option value="instructors">Instructors Only</option>
                                <option value="all">All</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label style={{ float: 'right' }}>
                            No more than one per: &emsp;
                            <select value={this.state.howOften} name="howOften" onChange={this.handleInputChange}>
                            
                            <option value="hourly">Hour</option>
                            <option value="6-hours">6 hours</option>
                            <option value="12-hours">12 hours</option>
                            <option value="daily">Day</option>
                            <option value="3-days">3 Days</option>
                            <option value="weekly">Week</option>
                            
                            </select>
                        </label>

                        <br />
                        <br />


                        <label style={{ float: 'right' }}>
                            Get All Instructor Announcements: &nbsp;
                                <input
                                name="receiveAnnouncements"
                                    type="checkbox"
                                checked={this.state.receiveAnnouncements}
                                    onChange={this.handleInputChange} />
                        </label>

                        <br />
                        <br />
                        
                        <input className="mb-3 w-100 options-save-button" type="submit" value="Save" />
                    </form>
                </div>


            </div>
        );
    }
}