import React, { Component } from 'react';
import { PostList } from './PostList/PostList'
import { SelectedPost } from './SelectedPost/SelectedPost'

var posts = [
    { id: 0, title: "Submission Issues", body: "When I make a zip file of my folders to submit and open the solution in visual studio, I get a "},
    { id: 1, title: "Perform Query", body: "I am stuck on trying to figure out how to extract both the whiteplayer name and black player name plus all the other fields from the databse using one select stateme" },
    { id: 2, title: "How do you change your database password", body: "Not too sure why I can't figure this out, but how do you change your database password?" },
    { id: 3, title: "Unit Testing Video", body: "There are a few details I did not show in lecture 18, mostly because they are not that interesting and would just complicate the videos. If you want to perform unit testing, you nee" },
];


export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props)

        this.ListItemHandler = this.ListItemHandler.bind(this)
        this.state = {
            selectedPostIndex: 0,
            posts : []
        }

    }


    ListItemHandler = (index) =>  {
        this.setState({
            selectedPostIndex : index,
        })
    }
 

    render() {

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    <PostList posts={posts} handler={this.ListItemHandler} />
                </div>
                <div class="col-sm-8">
                    <SelectedPost post={posts[this.state.selectedPostIndex]} />
                </div>
            </div>
            
      </div>
    );
  }
}
