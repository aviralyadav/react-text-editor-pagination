import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { match, posts } = this.props;
        const id = Number(match.params.id);
        const post = posts.find(post => post.id===id);
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex(post=>post.id === id);
        return (
            <div className="single-photo">
            <Photo post={post} {...this.props} index={index}  />
            <Comments addComment={this.props.addComment} postId={id} comments={comments}/>
            </div>
        );
    }
}

export default Single;