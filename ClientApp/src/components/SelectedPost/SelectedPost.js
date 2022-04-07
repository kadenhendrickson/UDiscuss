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
        return (
            <div className="post-border border-color">
                <SelectedPostHeader postType="Question" author="Author Name" timeSincePost="2 hrs ago" />
                <SelectedPostTitle title={this.props.post.title}/>
                <SelectedPostBody body={this.props.post.body} />
                <div style={{float: 'right', margin: '10px'}}>
                    <SelectedPostTag tagTitle="Logistics" />
                </div>
                <div className="d-inline-block m-1">
                    <SelectedPostVoteButton upvotes={7} isToggled={false} />
                </div>
                
            </div>
        );
    }
}


