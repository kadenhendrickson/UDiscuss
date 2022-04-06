import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import Checkmark from '../Images/Checkmark.png';
import { CommentVoteButton } from './../CommentVoteButton'
import { SolutionBoxHeader } from './SolutionBoxHeader'
import { SolutionBoxText } from './SolutionBoxText'
import { SolutionBoxAuthor } from './SolutionBoxAuthor'
//<img class="img-fluid" src={Checkmark} alt="checkmark" />

/*
 * Represents a solution's body
 *  
 * */
export class SolutionBox extends Component {
    static displayName = SolutionBox.name;

    render() {
        return (
            <div className="post-border border-color w-50">
                <SolutionBoxHeader timeSincePost="2 hrs ago" isVerified={true} timeSincePost="2 hrs ago" />
                <div className="m-2">
                    <SolutionBoxText contents="The answer would be blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah" />
                </div>
                <div className="m-2" style={{ float: 'right'}}>
                    <SolutionBoxAuthor author="Professor Brown" />
                </div>
                <CommentVoteButton upvotes={7} isUpToggled={false} isDownToggled={false} />
            </div>
        );
    }
}
