import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../api/share';
import '../assets/css/oneStory.scss';
import '../index.scss';

class Result extends Component {
	shareMarks() {
		axios
			.post('/articles/test-article-1ajwtqv7kk/share/facebook')
			.then((res) => {
				console.log('======res', res);
			})
			.catch((err) => {
				console.log('=====err:', err);
			});
	}
	render() {
		const { questionsDone, totalMarks } = this.props.resolve;
		return (
			<div className="container">
				<h2>Riders Game marks</h2>
				<h3>Questions Done:{questionsDone.length}</h3>
				<h3>
					Total marks:{totalMarks} <b>Marks</b>
				</h3>
				{questionsDone.map((question) => (
					<div key={question.question.id}>
						<div className="answer-view">
							<p>
								<b>Question: </b>
								{question.question.title}
							</p>
							<p>
								<b>Right answer: </b>
								{question.question.rightAnswer}
							</p>
							<p>
								<b>Answer provided: </b> {question.answer}
							</p>
							<p>
								<b>Marks: </b>
								{question.marks} <b>Marks</b>
							</p>
						</div>
						<hr />
					</div>
				))}
				<button onClick={this.shareMarks} className="next_button">
					Share your marks
				</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log('state======>Result', state);
	const { auth, resolve } = state;
	return {
		auth,
		resolve
	};
};

const connectedResult = connect(mapStateToProps)(Result);

export { connectedResult as Result };
