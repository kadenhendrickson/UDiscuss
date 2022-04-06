import React, { Component } from 'react';
import './css/PostList.css'

export class PostListItem extends React.Component {
    constructor(props) {
        super(props)
        this.onItemClick = this.onItemClick.bind(this)
    }

    onItemClick = () => {
        console.log("The key for this postlistitem is ", this.props.post.id)
        this.props.handler(this.props.post.id)
    }

    render() {
        return (
            <li className="list-group-item list-group-item-action flex-column align-items-start" onClick={this.onItemClick}>
                <div className="d-flex justify-content-between">
                    <h6 className="mb-1 text-truncate"> {this.props.post.title} </h6>
                    <small className="text-nowrap"> 3 days ago </small>
                </div>
                <p className="mbr-1 text-truncate--3"> {this.props.post.body}</p>
            </li>
        )
    }


}