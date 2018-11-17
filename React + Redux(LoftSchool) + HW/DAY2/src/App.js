import React, {Component} from 'react';
import NewsPost from './NewsPort';
import './App.css';
class App extends Component {
	state = {
		newsInput : '',
		news : [], // list posts
	};
	uniqueId = () => {
		return Math.random().toString().slice(2, 8);
	};
	handleChange = e => {
		const value = e.target.value;
		this.setState({newsInput : value});
	};
	handleKeyDown = e => {
		const keyCodeEnter = 13;
		if(e.keyCode === keyCodeEnter) {
			const {news} = this.state;
			const text = this.state.newsInput;
			this.setState({newsInput : ''});
			this.setState({news : [{id : this.uniqueId(), text}, ...news]});
		};
	};
	render() {
		const {news, newsInput} = this.state;
		return (
			<div className="App">
				<input
					type="text"
					className="post-input"
					value={newsInput}
					placeholder="Typed new post and press Enter"
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
				{news.map(post => <NewsPost key={post.id} text={post.text}/>)}
			</div>
		);
	};
};
export default App;