import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import Checkmark from '../Images/Checkmark.png';
import { CommentVoteButton } from './../CommentVoteButton'
import {SolutionBoxHeader} from './SolutionBoxHeader'
//<img class="img-fluid" src={Checkmark} alt="checkmark" />

/*
 * Represents a solution's body
 *  
 * */
export class SolutionBox extends Component {
    static displayName = SolutionBox.name;

    render() {
        return (
            <div className="post-border border-color w-50">
                <SolutionBoxHeader timeSincePost="2 hrs ago" author="Author Name" timeSincePost="2 hrs ago" />
             
                <div style={{ float: 'right', margin: '10px' }}>
              
                </div>
                    <CommentVoteButton upvotes={7} isUpToggled={false} isDownToggled={false}/>
               
            </div>
        );
    }
}
