import React, { Component } from 'react';
import './../css/Design.css';



export class Comment extends Component {
    static displayName = Comment.name;


    render() {
        return (
            <div>
                <div className="m-2 p-3 comment">
                    <h6> {this.props.comment.authorFName} {this.props.comment.authorLName} </h6>
                    <p> {this.props.comment.body} </p>
                </div>
                <div>

                </div>

            </div>
            
            )
    }
}