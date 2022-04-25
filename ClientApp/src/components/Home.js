import React, { Component } from 'react';
import { PostList } from './PostList/PostList'
import { SelectedPost } from './SelectedPost/SelectedPost'
import { SolutionBox } from './SolutionBox/SolutionBox';
import { CreatePost } from './CreatePost/CreatePost';
import { CommentContainer } from './CommentThreads/CommentContainer';




export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.ListItemHandler = this.ListItemHandler.bind(this);
        this.getAllPosts = this.getAllPosts.bind(this);
        this.getClassCategories = this.getClassCategories.bind(this);
        this.getCommentsForPost = this.getCommentsForPost.bind(this);

        // For switching to creating a post
        this.createPostClicked = this.createPostClicked.bind(this);

        this.tempUserHandler = this.tempUserHandler.bind(this);
        this.filterPostsBy = this.filterPostsBy.bind(this);

        this.state = {
            selectedPostIndex: 0,
            posts: [],
            displayedPosts: [],
            loading: true,
            creatingPost: false,
            classCategories: [],
            userID: "1",
            comments: [],
            loadingComments: true
        };

    }

    componentDidMount() {
        this.getAllPosts();
        this.getClassCategories();
        this.getCommentsForPost(0);
    }

    tempUserHandler(event) {
        this.setState({ userID : event.target.value});
    }

    async getCommentsForPost(postID) {
        console.log("THE POST ID IS: ", '/api/reply/'+postID);

        const response = await fetch('/api/reply/' + postID);
        const json = await response.json();
        this.setState({ comments: json, loadingComments: false});
    }

    async getAllPosts() {
        const response = await fetch('/api/post/1');
        const json = await response.json();
        this.setState({ posts: json, displayedPosts: json, loading: false });
    }

    async getClassCategories() {
        const response = await fetch('/api/class/categories/1');
        const json = await response.json();
        this.setState({ classCategories: json });
    }

    ListItemHandler = (index) => {
        this.setState({ selectedPostIndex: index });
        console.log("About to fetch comments for post with index: ", this.state.displayedPosts[index].id);
        this.getCommentsForPost(this.state.displayedPosts[index].id);
    }

    /*
     * Changes the create Post clicked boolean, which in turn swaps the selected post
     * component for the create post component or vice versa.
     */
    createPostClicked() {
        this.setState({ creatingPost: !this.state.creatingPost });

        // If a post was just created, load in the posts again.
        if (!this.state.creatingPost) {
            this.getAllPosts();
        }
    }

    filterPostsBy = (event) => {
        var tempPosts = [];
        switch (event.target.value) {
            case 'All':
                tempPosts = this.state.posts;
                break;
            case 'Unread':
                break;
            case 'Unanswered':
                tempPosts = this.state.posts.filter(p => !p.isAnswered)
                break;
            case 'Answered':
                tempPosts = this.state.posts.filter(p => p.isAnswered)
                break;
            case 'InstructorPost':
                break;
            default:
                break;
        }

        if (tempPosts.length > 0) {
            this.setState({ displayedPosts: tempPosts, selectedPostIndex: 0 });
            console.log(tempPosts);
        }
        console.log("Value of the filter is: ", event.target.value);
    }


    render() {
        let listContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : <PostList posts={this.state.displayedPosts} handler={this.ListItemHandler} />;


        let rightPanel, postContent, solutionContent, commentContent;

        if (!this.state.creatingPost) {
            postContent = this.state.loading
                ? <p><em>Loading...</em></p>
                : <SelectedPost post={this.state.displayedPosts[this.state.selectedPostIndex]} />;

            solutionContent = this.state.loading
                ? <p><em>Loading...</em></p>
                : <SolutionBox isVerified={true} author="Professor Brown" />;

            commentContent = this.state.loadingComments
                ? <p><em>Loading...</em></p>
                : <CommentContainer comments={this.state.comments} />;

            rightPanel =
                <div>
                    <div onClick={this.createPostClicked}>
                        <button className="w-100 m-2 btn white-with-red-outline-button">Create Post</button>
                    </div>
                    {postContent}
                {solutionContent}
                {commentContent}

                </div>;
        }
        else {
            rightPanel =
                <div>
                <CreatePost userID={this.state.userID} categories={this.state.classCategories} SwapOutCreateFn={this.createPostClicked}/>
                </div>;
        }

        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">


                        <label className="m-1">
                            Select User: &emsp;
                            <select name="userID" onChange={this.tempUserHandler} required>
                                <option value="3"> Ryan Howell</option>
                                <option value="10">Mark Patterson</option>
                                <option value="12">Kaden Hendrickson</option>
                                <option value="4">Lucas Katsanevas</option>
                            </select>
                        </label>

                        <label className="m-1">
                            Filter By: &emsp;
                            <select name="filterBy" onChange={this.filterPostsBy} required>
                                <option value = "All" selected> All </option>
                                <option value="Unread">Unread</option>
                                <option value="Unanswered">Unanswered</option>
                                <option value="Answered">Answered</option>
                                <option value="InstructorPost">Instructor Posts</option>
                            </select>
                        </label>


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
