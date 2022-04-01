import React, { Component } from 'react';
import { Triangle } from './../Triangle';
import './../css/LightTheme.css';
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

    // TODO - fix so number isn't centered based off of padding
    render() {
        let arrow;
       
        if (this.state.isToggled)
            arrow = <Triangle size={20} color="#CC0000"/>;
        else
            arrow = <Triangle size={20} color="#CECECE"/>;
        return (
            <div>

                {arrow}
                
                <p style={{ 'padding-left': '6px' }}><b>{this.state.upvotes}</b></p>
            </div>
        );
    }
}
