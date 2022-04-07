import React, { Component } from 'react';
import { Triangle } from './Triangle';
import './css/LightTheme.css';
/*
 * Represents a vote button for upvotes and downvotes.
 *  
 * */
export class CommentVoteButton extends Component {
    static displayName = CommentVoteButton.name;

    constructor(props) {
        super(props);

        // has two props representing the number of upvotes and if it is currently toggled.
        this.state = { upvotes: props.upvotes, isUpToggled: props.isUpToggled, isDownToggled: props.isDownToggled };
        this.toggleUpvote = this.toggleUpvote.bind(this);
        this.toggleDownvote = this.toggleDownvote.bind(this);
    }

    /*
     * Updates the toggle state and vote count from the click
     * 
     * TODO update database
     * 
     * */
    toggleUpvote() {
        // If it is already toggled, untoggle it and subtract one to the vote count.
        if (this.state.isUpToggled) {
            this.setState({ upvotes: this.state.upvotes - 1 });
            this.setState({ isUpToggled: false });
        }
        // If it is not toggled, toggle it and untoggle the downvote if it is currently toggled.
        else {
            if (this.state.isDownToggled) {
                this.setState({ isDownToggled: false });
                this.setState({ upvotes: this.state.upvotes + 2 });
            }
            else {
                this.setState({ upvotes: this.state.upvotes + 1 });
            }

            this.setState({ isUpToggled: true });
        }
    }


    /*
     * Updates the toggle state and vote count from the click
     * for all downvote scenarios
     * 
     * TODO - update db
     * */
    toggleDownvote() {
        // If it is already toggled, untoggle it and add one to the vote count.
        if (this.state.isDownToggled) {
            this.setState({ upvotes: this.state.upvotes + 1 });
            this.setState({ isDownToggled: false });
        }
        // If it is not toggled, toggle it and untoggle the upvote if it is currently toggled.
        else {
            if (this.state.isUpToggled) {
                this.setState({ isUpToggled: false });
                this.setState({ upvotes: this.state.upvotes - 2 });
            }
            else {
                this.setState({ upvotes: this.state.upvotes - 1 });
            }
            
            this.setState({ isDownToggled: true });
        }
    }



    // TODO - fix so number isn't centered based off of padding
    render() {
        let upArrow;
        let downArrow;

        if (this.state.isUpToggled)
            upArrow = <Triangle width={25} height={15} color="#CC0000" isUp={true}/>;
        else
            upArrow = <Triangle width={25} height={15} color="#CECECE" isUp={true}/>;

        if (this.state.isDownToggled)
            downArrow = <Triangle width={25} height={15} color="#CC0000" isUp={false}/>;
        else
            downArrow = <Triangle width={25} height={15} color="#CECECE" isUp={false}/>;


        return (
            <div className="d-inline-block m-1" style={{ margin: '10px' }}>
                <div className="d-inline-flex" onClick={this.toggleUpvote}>
                    {upArrow}
                </div>
                <h6 className="m-0 text-center">{this.state.upvotes}</h6>
                <div className="d-inline-flex" onClick={this.toggleDownvote}>
                    {downArrow}
                </div>
            </div>
        );
    }
}
