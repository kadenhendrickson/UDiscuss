import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import { SelectedPostVoteButton } from './SelectedPostVoteButton';
import { SelectedPostTitle } from './SelectedPostTitle';
import { SelectedPostBody } from './SelectedPostBody';
import { SelectedPostHeader } from './SelectedPostHeader';
import { SelectedPostTag } from './SelectedPostTag';
/*
 * Represents a post's body
 *  
 * */
export class SelectedPost extends Component {
    static displayName = SelectedPost.name;

    render() {
        const st = {float: 'right'};
        return (
            <div className="post-border border-color">
                <SelectedPostHeader postType="Question" author="Author Name" timeSincePost="2 hrs ago" />
                <SelectedPostTitle title="This is a title" />
                <SelectedPostBody body="this is the body............ blah blah blah asdf asdf;lajsdflkaj;sal;s fjasdfasdf" />
                <div style={st}>
                    <SelectedPostTag tagTitle="Logistics" />
                </div>
                <SelectedPostVoteButton upvotes={7} isToggled={false} />
            </div>
        );
    }
}
