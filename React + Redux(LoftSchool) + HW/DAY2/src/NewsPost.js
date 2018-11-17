import React, { Component } from 'react';
import Comment from './Comment';
import './NewsPost.css';

let commentId = 0;

function getCommentId() {
  commentId += 1;
  return commentId;
}

class NewsPost extends Component {
  state = {
    commentInput: '',
    comments: [], // список комментариев поста
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ commentInput: value });
  };

  handleKeyDown = e => {
    const keyCodeEnter = 13;
    if (e.keyCode === keyCodeEnter) {
      const { comments, commentInput } = this.state;
      this.setState({ commentInput: '' });
      this.setState({
        comments: [...comments, { id: getCommentId(), text: commentInput }],
      });
    }
  };

  handleDelete = id => {
    let { comments } = this.state;
    comments = comments.filter(comment => comment.id !== id);
    this.setState({ comments });
  };

  render() {
    const { text } = this.props;
    const { comments, commentInput } = this.state;
    return (
      <div>
        <p className="news-post">{text}</p>
        <input
          type="text"
          className="comment-input"
          value={commentInput}
          placeholder="Typed your comment and press Enter"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.text}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default NewsPost;