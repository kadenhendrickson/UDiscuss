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

    constructor(props) {
        super(props)
    }

    render() {
        // Handle anonymous author case.
        var postAuthor = this.props.post.authorFName + " " + this.props.post.authorLName;
        if (this.props.post.isAnonymous) {
            postAuthor = "Anonymous User";
        }
        return (
            <div className="m-2 post-border border-color w-100">
                <SelectedPostHeader postType={this.props.post.type} author={postAuthor} timeSincePost={this.props.post.dateCreated} />
                <SelectedPostTitle title={this.props.post.title} />
                <SelectedPostBody body={this.props.post.body} />
                <div style={{ float: 'right', margin: '10px' }}>
                    <SelectedPostTag tagTitle={this.props.post.category} />
                </div>
                <SelectedPostVoteButton upvotes={7} isToggled={false} />
            </div>
        );
    }
}


