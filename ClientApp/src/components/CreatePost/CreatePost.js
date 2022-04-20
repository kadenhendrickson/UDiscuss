import React, { Component } from 'react';
import './../css/LightTheme.css';
import './../css/Design.css';
import { Button } from '@material-ui/core';



/*
 * Component for creating a post
 *  
 * */
export class CreatePost extends Component {
    static displayName = CreatePost.name;


    constructor(props) {
        super(props);

        // Can change this slightly later to take arguments -- that way we can do drafts.
        this.state = { postType: "", isAnonymous: "", shareWith: "Everyone", selectedTag: "", title: "", body: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * 
     * Handles the event that the post button was clicked. 
     * This will check that all required fields are filled out.
     * If so, it notifies the user and takes them back to being
     * able to view each post. Otherwise, it notifies them what
     * needs to be filled in still.
     * 
     */
    handleSubmit(event) {


        // take out later -- alert showing data
        alert('post type: ' + this.state.postType + '\n share with: ' + this.state.shareWith + '\n is anon: ' + this.state.isAnonymous
            + ' \nselected tag: ' + this.state.selectedTag + "\n title : " + this.state.title + "\n body: " + this.state.body);
        this.props.SwapOutCreateFn();
        event.preventDefault();


        // Create the post
        let isAnon = false;
        if (this.state.isAnonymous == "yes") {
            isAnon = true;
        }
        var newPost = {category: this.state.selectedTag, title: this.state.title,
            body: this.state.body, "authorID": 3, "isAnonymous": isAnon
        }


        // Send request to the DB.
        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
            */


    }

    /**
     * Cancels the post and swaps the screen back to where it was before.
     * 
     * In future - make it so drafts are saved here......
     * 
     * */
    handleCancel() {
        this.props.SwapOutCreateFn();
    }

    handleInputChange(event) {
        const target = event.target;
        let value;
        const name = target.name;
        value = target.value;
        this.setState({ [name]: value });

    }

    render() {
        return (
            <div>
                <div className="w-100 justify-content-center" style={{ margin: '0 auto', position: 'relative' }}>
                    <form onSubmit={this.handleSubmit}>

                        <br />

                        <div onChange={this.handleInputChange}>
                            <label>
                                Post Type: &emsp;

                                <input type="radio" value="Question" name="postType" required /> Question &emsp;
                                <input type="radio" value="Note" name="postType" /> Note

                            </label>
                        </div>

                        <br />

                        <div onChange={this.handleInputChange}>
                            <label>
                                Anonymous to Other Students: &emsp;

                                <input type="radio" value="yes" name="isAnonymous" required /> Yes &emsp;
                                <input type="radio" value="no" name="isAnonymous" /> No

                            </label>
                        </div>

                        <br />

                        <label>
                            Share With: &emsp;
                            <select name="shareWith" onChange={this.handleInputChange} required>
                                <option value="" disabled selected> </option>
                                <option value="Everyone">Everyone</option>
                                <option value="Instructors Only">Instructors Only</option>
                                <option value="Professor Only">Professor Only</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label>
                            Select a tag: &emsp;
                            <select value={this.state.selectedTag} name="selectedTag" onChange={this.handleInputChange} required>
                                <option value="" disabled selected> </option>
                                <option value="tag1">tag1</option>
                                <option value="tag2">tag2</option>
                                <option value="tag3">tag3</option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label>
                            Title: &emsp;
                            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} required />
                        </label>

                        <br />
                        <br />

                        <textarea className="w-100" rows="8" name="body" value={this.state.body} onChange={this.handleInputChange} required />

                        <div className="btn-group d-flex" role="group">
                            <input className="w-100 m-1 btn accent-color text-white" type="submit" value="Post" />
                            <button className="w-100 m-1 btn white-with-red-outline-button" type="button" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}