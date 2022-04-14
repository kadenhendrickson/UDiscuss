import React, { Component } from 'react';
import './NavMenu.css';
import './css/LightTheme.css';

export class CreatePostButton extends Component {
    static displayName = CreatePostButton.name;

    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }


    buttonClick() {

    }

    render() {
        return (
            <div>
                <button className="w-100 btn btn-outline-danger" onclick={this.buttonClick}>Create Post</button>
            </div>
        );
    }
}
