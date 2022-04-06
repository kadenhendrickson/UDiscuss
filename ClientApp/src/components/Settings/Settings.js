import React, { Component } from 'react';
import './../css/LightTheme.css';
import { EmailNotifications } from './EmailNotifications';
import { ProfileInformation } from './ProfileInformation';
import { DarkModeToggle } from './DarkModeToggle';

/*
 * Represents a post's body
 *  
 * */
export class Settings extends Component {
    static displayName = Settings.name;

    render() {
        return (
            <div>
                <h1 className="d-flex justify-content-center p-2"> Settings </h1>
                <div className="d-flex justify-content-center">
                    <DarkModeToggle className="d-flex justify-content-center p-2" isDarkMode={false} />
                </div>

                <div className="d-flex justify-content-center">
                    <ProfileInformation name={"Jane Doe"} email={"JaneDoe@gmail.com"} />
                </div>
                <div className="d-flex justify-content-center">
                    <EmailNotifications emailType="self" howOften="hourly" receiveAnnouncments={true} />
                </div>
            </div>
        );
    }
}