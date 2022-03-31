import React, { Component } from 'react';

export class GetPosts extends Component {
  static displayName = GetPosts.name;

  constructor(props) {
    super(props);
    this.state = { posts: [], loading: true };
  }

  componentDidMount() {
      this.getPosts();
  }

  static renderPostsTest(posts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
                <th>Title</th>
                <th>Date Created</th>
                <th>Body</th>
                <th>Author ID</th>
                <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post =>
              <tr key={post.postId}>
                  <td>{post.title}</td>
                  <td>{post.dateCreated}</td>
                  <td>{post.body}</td>
                  <td>{post.authorId}</td>
                  <td>{post.categoryId}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : GetPosts.renderPostsTest(this.state.posts);

    return (
      <div>
        <h1 id="tabelLabel" >Post Data Test</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async getPosts() {
        const response = await fetch('post');
        const data = await response.json();
        this.setState({ posts: data, loading: false });
    }
}
