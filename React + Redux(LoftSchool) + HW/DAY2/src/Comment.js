import React, {Component} from 'react';
import './Comment.css';
class Comment extends Component {
	handleDelete = () => {
		const {id, onDelete} = this.props;
		onDelete(id);
	};
	render() {
		const {text} = this.props;
		return (
			<div>
				<p>
					{text}
					<span className="delete" onClick={this.handleDelete}>x</span>
				</p>
			</div>
		);
	};
};
export default Comment;