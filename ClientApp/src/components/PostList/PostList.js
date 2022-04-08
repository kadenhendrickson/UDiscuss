import React from 'react';
import { PostListItem } from './PostListItem';

export function PostList(props) {
    return (
        <ul class="list-group">
            {props.posts.map((post, index) =>
                <PostListItem key={index} idx={index} post={post} handler={props.handler}/>
            )}
        </ul>
        )
}
