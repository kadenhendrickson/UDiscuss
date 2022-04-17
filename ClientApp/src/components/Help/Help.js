import React, { Component } from 'react';
import './../css/LightTheme.css';

/*
 * Represents a post's body
 *  
 * */
export class Help extends Component {
    static displayName = Help.name;

    render() {
        return (
            <div>
                <h1 className="d-flex justify-content-center p-2"> Help </h1>
                <h5> How Does UDiscuss Work? </h5>
                <p> UDiscuss is an online discussion forum for your University of Utah courses.
                    You can scroll through discussions your instructors and classmates have posted, selecting
                    them to learn more details. UDiscuss gives you the ability to create posts, comment on other posts,
                    vote on them, and more. </p>
                <br/>

                <h5> How Do I Find a Specific Post? </h5>
                <p> You are first going to want to select the correct course from the courses dropdown. You will then
                    be able to filter posts by unanswered, newest, most popular, and other filters. You can also search for specific
                    terms using the search bar or search by tag if you want to only search by a specific assignment or other grouping. </p>
                <br />

                <h5> Email Notifications </h5>
                <p> To change how often you get notified by UDiscuss about your courses' posts, you can go to Settings and choose (1) what types of
                    posts you get notified for and (2) how often you get these. In addition, you can choose to be notified for all professor announcements.
                </p>
                <br />

                <h5> Contact Info </h5>
                <p> Contact UIT at FakeEmail@gmail.com or call 801-555-5555 </p>
            </div>
        );
    }
}