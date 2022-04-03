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
        return (
            <div className="secondary-color underline-nav">
                <div style={{ 'margin-right': '10px', 'margin-left': '10px'}}>
                    <h5 style={{float: 'right'}}>{this.props.timeSincePost}</h5>
                    <h5>{this.props.postType} by {this.props.author}</h5>
                </div>
            </div>
        );
    }
}
