import React, { Component } from 'react';
import './NavMenu.css';
import './css/LightTheme.css';
import { SelectedPostVoteButton } from './SelectedPost/SelectedPostVoteButton';
import { SelectedPostTitle } from './SelectedPost/SelectedPostTitle';
import { SelectedPostBody } from './SelectedPost/SelectedPostBody';
import { SelectedPostHeader } from './SelectedPost/SelectedPostHeader';
import { SelectedPost } from './SelectedPost/SelectedPost';
import { ProfileInformation } from './Settings/ProfileInformation';
import { EmailNotifications } from './Settings/EmailNotifications';
import { CommentVoteButton } from './CommentVoteButton';
import { SolutionBox } from './SolutionBox/SolutionBox';
import { Triangle } from './Triangle';
import { CreatePost } from './CreatePost/CreatePost';

export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>

 
            </div>
        );
    }
}
