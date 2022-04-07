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
                <p> UDiscuss is an online discussion board for your University of Utah courses.
                    You can scroll through discussions your instructors and classmates have posted, selecting
                    them to learn more details. UDiscuss gives you the ability to create posts, comment on other posts,
                    vote on them, and more. </p>

                <h5> How Do I Find a Specific Post </h5>
                <p> You are first going to want to select the correct course from the courses dropdown. You will then
                    be able to filter posts by unanswered, newest, and other things. You can also search for specific
                    terms using the search bar or search by tag if you want to only search by a specific assignment or other grouping. </p>

                    <h5> More Stuff </h5>
                <p> We need to figure out what all else this page will consist of............... </p>


                <h5> Contact Info </h5>
                <p> Contact UIT at ___@gmail.com or call 801-555-5555 </p>
            </div>
        );
    }
}