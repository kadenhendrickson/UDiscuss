import React, { Component } from 'react';
import '../css/LightTheme.css';



/*
 * Creates the header banner for the selected post.
 * 
 * The question type and name are on the left, while the time is on right.
 *  
 * */
export class SelectedPostHeader extends Component {
    static displayName = SelectedPostHeader.name;


    render() {

        // Make the date displayable. Will probably want to update this more in future to show "1 hr ago, etc....."
        var date = new Date(this.props.timeSincePost);

        //var formatted = date.ToDateString();

        return (
            <div className="secondary-color underline-nav">
                <div className="p-1">
                    <h5 style={{ float: 'right' }}>{date.toDateString()}</h5>
                    <h5>{this.props.postType} by {this.props.author}</h5>
                </div>
            </div>
        );
    }
}
