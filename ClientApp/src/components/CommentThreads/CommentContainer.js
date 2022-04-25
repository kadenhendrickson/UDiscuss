import React, { Component } from 'react';
import { Comment } from './Comment';
import './../css/Design.css';



export class CommentContainer extends Component {
    static displayName = CommentContainer.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="m-2 position-relative commentContainer">
                <ul class="list-group">
                    {this.props.comments.map((comment, index) =>
                        <Comment key={index} comment={comment} />
                    )}
                </ul>
                <div>
                    <form onSubmit={this.createReply}>
                        <div className="col-auto">
                            <label for="submitReply" class="visually-hidden"> Reply</label>
                            <input type="text" class="form-control" id="submitReply" placeholder="Reply to this post" />
                            <button type="submit" class="btn btn-primary mb-3"> post </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}