import React, { Component } from 'react';
import { PostList } from './PostList/PostList'
import { SelectedPost } from './SelectedPost/SelectedPost'
import { SolutionBox } from './SolutionBox/SolutionBox';
import { CreatePost } from './CreatePost/CreatePost';




export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.ListItemHandler = this.ListItemHandler.bind(this);
        this.getAllPosts = this.getAllPosts.bind(this);

        // For switching to creating a post
        this.createPostClicked = this.createPostClicked.bind(this);

        this.state = { selectedPostIndex: 0, posts: [], loading: true, creatingPost: false };

    }

    componentDidMount() {
        this.getAllPosts();
    }


    async getAllPosts() {
        const response = await fetch('/post/1');
        const json = await response.json();
        this.setState({ posts: json, loading: false })
    }

    ListItemHandler = (index) => {
        this.setState({ selectedPostIndex: index });
    }

    /*
     * Changes the create Post clicked boolean, which in turn swaps the selected post
     * component for the create post component or vice versa.
     */
    createPostClicked() {
        this.setState({ creatingPost: !this.state.creatingPost });
    }


    render() {
        let listContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : <PostList posts={this.state.posts} handler={this.ListItemHandler} />;


        let rightPanel, postContent, solutionContent;

        if (!this.state.creatingPost) {
            postContent = this.state.loading
                ? <p><em>Loading...</em></p>
                : <SelectedPost post={this.state.posts[this.state.selectedPostIndex]} />;

            solutionContent = this.state.loading
                ? <p><em>Loading...</em></p>
                : <SolutionBox isVerified={true} author="Professor Brown" />;

            rightPanel =
                <div>
                    <div onClick={this.createPostClicked}>
                        <button className="w-100 btn white-with-red-outline-button">Create Post</button>
                    </div>
                    {postContent}
                    {solutionContent}
                </div>;
        }
        else {
            rightPanel =
                <div>
                <CreatePost createPostFn={this.createPostClicked}/>
                </div>;
        }

        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        {listContent}
                    </div>
                    <div class="col-sm-8">
                        {rightPanel}
                    </div>
                </div>
            </div>
        );
    }
}
