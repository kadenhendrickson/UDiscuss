import React, { Component } from 'react';
import './NavMenu.css';
import './css/LightTheme.css';

export class CreatePostButton extends Component {
    static displayName = CreatePostButton.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.buttClick = this.buttClick.bind(this);
    }


    buttonClick() {

    }

    render() {
        return (
            <div>
                <button onclick={this.buttonClick}>Create Post</button>
            </div>
        );
    }
}
