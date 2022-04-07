import React from 'react';
import { PostListItemTitle } from './PostListItemTitle';
import { PostListItemBody } from './PostListItemBody';


export function PostListItem(props) {
    return (
        <div>
            <PostListItemTitle title={props.title} />
            <PostListItemBody body={props.body} />
        </div>
        )
}