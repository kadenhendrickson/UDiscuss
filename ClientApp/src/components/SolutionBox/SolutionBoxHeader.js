import React, { Component } from 'react';
import '../css/LightTheme.css';
import Checkmark from '../Images/Checkmark.png';

/*
 * Creates the header banner for the selected post.
 * 
 * The question type and name are on the left, while the time is on right.
 *  
 * */
export class SolutionBoxHeader extends Component {
    static displayName = SolutionBoxHeader.name;

    render() {
        // Check if the solution is verified or not.
        let solutionBoxTitle;
        if (this.props.isVerified) {
            solutionBoxTitle =
                <div>
                <div className="d-inline-block">
                    <h6> Verified Solution &emsp;</h6>
                </div>

                <div className="d-inline-block">
                    <img src={Checkmark} width={20} height={20} alt="checkmark" />
                </div>
                </div>
        }
        else {
            solutionBoxTitle = <h6> Suggested Solution </h6>
        }
        return (
            <div className="secondary-color underline-nav">
                <div style={{ 'margin-right': '10px', 'margin-left': '10px' }}>
                    <h6 style={{ float: 'right' }}>{this.props.timeSincePost}</h6>
                    {solutionBoxTitle}
                </div>
            </div>
        );
    }
}
