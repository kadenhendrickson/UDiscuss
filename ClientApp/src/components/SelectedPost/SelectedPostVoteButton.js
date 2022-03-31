import React, { Component } from 'react';

/*
 * Represents an upvote button which user can click to toggle their vote.
 *  
 * */
export class SelectedPostVoteButton extends Component {
    static displayName = SelectedPostVoteButton.name;

    constructor(props) {
        super(props);

        // has two props representing the number of upvotes and if it is currently toggled.
        this.state = { upvotes: props.upvotes, isToggled: props.isToggled };
        this.toggleUpvote = this.toggleUpvote.bind(this);
    }

    /*
     * Updates the toggle state and vote count from the click
     * 
     * TODO update database
     * 
     * */
    toggleUpvote() {
        if (this.state.isToggled) {
            this.setState({ upvotes: this.state.upvotes - 1 });
            this.setState({ isToggled: false });
        }

        else {
            this.setState({ upvotes: this.state.upvotes + 1 });
            this.setState({ isToggled: true });
        }
    }



    // TODO - turn toggle button into a triangle.
    render() {
        let button;
        if (this.state.isToggled)
            button = <button className="btn btn-danger" onClick={this.toggleUpvote}></button>;
        else
            button = <button className="btn btn-primary" onClick={this.toggleUpvote}></button>;
        return (
            <div>

                {button}
                <p aria-live="polite">{this.state.upvotes}</p>
            </div>
        );
    }
}
