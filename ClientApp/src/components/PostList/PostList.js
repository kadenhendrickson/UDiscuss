import React from 'react';
import { PostListItem } from './PostListItem';

export function PostList(props) {
    return (
        <ul class="list-group">
            {props.posts.map(post =>
                <PostListItem key={post.id} post={post} handler={props.handler}/>
            )}
        </ul>
        )
}
