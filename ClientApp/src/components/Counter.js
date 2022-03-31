import React, { Component } from 'react';
import './NavMenu.css';
import './css/LightTheme.css';
import { SelectedPostVoteButton } from './SelectedPost/SelectedPostVoteButton';
import { SelectedPostTitle } from './SelectedPost/SelectedPostTitle';
import { SelectedPostBody } from './SelectedPost/SelectedPostBody';
import { SelectedPostHeader } from './SelectedPost/SelectedPostHeader';
import { SelectedPost } from './SelectedPost/SelectedPost';
import { Triangle } from './Triangle';

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
            <h1>Triangle</h1>
            <Triangle/>


            <SelectedPost/>
            <SelectedPostVoteButton upvotes={5} isToggled={true} />
            <SelectedPostTitle title="this is a title" />
            <SelectedPostBody body="this is the body.............." />
            <SelectedPostHeader postType="Question" author="Lucas Katsanevas" timeSincePost = "2 hours ago"/>

            <p className="">This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
