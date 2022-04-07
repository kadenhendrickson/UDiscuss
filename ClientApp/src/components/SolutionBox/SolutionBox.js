import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import { CommentVoteButton } from './../CommentVoteButton'
import { SolutionBoxHeader } from './SolutionBoxHeader'
import { SolutionBoxText } from './SolutionBoxText'
import { SolutionBoxAuthor } from './SolutionBoxAuthor'

/*
 * Represents a solution's body
 *  
 * */
export class SolutionBox extends Component {
    static displayName = SolutionBox.name;

    render() {
        return (
            <div className="m-2 post-border border-color w-100 position-relative">
                <SolutionBoxHeader timeSincePost="2 hrs ago" isVerified={true} timeSincePost="2 hrs ago" />
                <div className="m-2">
                    <SolutionBoxText contents="The answer would be blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah" />
                </div>
                <div className="m-2 position-absolute" style={{bottom: '0', right: '0' }}>
                    <SolutionBoxAuthor author="Professor Brown" />
                </div>
                <div>
                    <CommentVoteButton upvotes={7} isUpToggled={false} isDownToggled={false} />
                </div>
            </div>
        );
    }
}
