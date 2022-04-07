import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import Checkmark from '../Images/Checkmark.png';
//<img class="img-fluid" src={Checkmark} alt="checkmark" />

/*
 * Represents a solution's body
 *  
 * */
export class SolutionBox extends Component {
    static displayName = SolutionBox.name;

    render() {
        const st = {float: 'right'};
        return (
            <div className="post-border border-color w-50">
                <SelectedPostHeader postType="Question" author="Author Name" timeSincePost="2 hrs ago" />
                <SelectedPostTitle title="This is a title"/>
                <SelectedPostBody body="this is the body............ blah blah blah blah blah blah blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah  blah blah blah asdf asdf;lajsdflkaj;sal;s fjasdfasdf" />
                <div style={{float: 'right', margin: '10px'}}>
                    <SelectedPostTag tagTitle="Logistics" />
                </div>
                <div style={{margin: '10px' }}>
                    <SelectedPostVoteButton upvotes={7} isToggled={false} />
                </div>
                
            </div>
        );
    }
}
