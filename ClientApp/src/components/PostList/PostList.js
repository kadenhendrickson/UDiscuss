import React from 'react';
import { PostListItem } from './PostListItem';

export function PostList(props) {
    return (
        <div>
            <ul class="list-group">
                {props.posts.map(post =>
                    <li class="list-group-item list-group-item-action">
                        <PostListItem key={post.key} title={post.title} body={post.body}/>
                    </li>
                )}
            </ul>
        </div>
        )
}
