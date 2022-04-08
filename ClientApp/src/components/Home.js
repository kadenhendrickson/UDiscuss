import React, { Component } from 'react';
import { PostList } from './PostList/PostList'
import { SelectedPost } from './SelectedPost/SelectedPost'
import { SolutionBox } from './SolutionBox/SolutionBox';

var testPosts = [
    { id: 0, title: "Submission Issues", body: "When I make a zip file of my folders to submit and open the solution in visual studio, I get a "},
    { id: 1, title: "Perform Query", body: "I am stuck on trying to figure out how to extract both the whiteplayer name and black player name plus all the other fields from the databse using one select stateme" },
    { id: 2, title: "How do you change your database password", body: "Not too sure why I can't figure this out, but how do you change your database password?" },
    { id: 3, title: "Unit Testing Video", body: "There are a few details I did not show in lecture 18, mostly because they are not that interesting and would just complicate the videos. If you want to perform unit testing, you nee" },
];


export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);

        this.ListItemHandler = this.ListItemHandler.bind(this);

        // Test is this method
        this.getAllPosts = this.getAllPosts.bind(this);

        this.state = {
            selectedPostIndex: 0,
            posts: [],
            loading : true,
        }

    }

    componentDidMount() {
        this.getAllPosts();
    }

    // DB TESTING
    async getAllPosts() {
        const response = await fetch('/post/1');
        const json = await response.json();
        this.setState({posts : json, loading : false})
    }

    ListItemHandler = (index) =>  {
        this.setState({selectedPostIndex: index});
    }

    render() {
        let listContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : <PostList posts={this.state.posts} handler={this.ListItemHandler} />;

        let postContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : <SelectedPost post={this.state.posts[this.state.selectedPostIndex]} />;

        let solutionContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : <SolutionBox isVerified={true} author="Professor Brown" />;

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    {listContent}
                </div>
                <div class="col-sm-8">
                    {postContent}
                    {solutionContent}
                </div>
            </div>
      </div>
    );
  }
}
