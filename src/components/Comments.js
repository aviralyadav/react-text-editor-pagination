import React, { Component } from "react";

class Comments extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(event.target.elements.comment.value, this.props.postId);
        event.target.elements.comment.value="";
    }
  render() {
    return (
      <div className="comment">
      {
          this.props.comments.map((comment, i)=>{
              return <p key={i}>{comment}</p>
          })
      }
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
