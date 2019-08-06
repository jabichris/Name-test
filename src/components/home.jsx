import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../assets/css/oneStory.scss';
import '../assets/css/pagination.scss';
import '../index.scss';
import { NavBar } from './';
import { paginate } from '../utils/paginate';
import { selectAnswer, goToNextQuestion } from '../store/actions/questionActions';
// import { Paginator } from './';

class Home extends Component {
	render() {
		console.log('sdfds====>', this.props);
		const { questions: allQuestions } = this.props;
		const { currentQuestion, totalMarks, questionsDone } = this.props.resolve;
		const qnsLength = allQuestions.length;
		const pageCount = qnsLength;
		const pages = _.range(1, pageCount + 1);
		const questions = paginate(allQuestions, currentQuestion, 1);

		return (
			<React.Fragment>
				{/* <NavBar /> */}
				<div className="container">
					<table>
						<thead>
							<tr>
								<th>Name Test question #{currentQuestion}</th>
							</tr>
							{questions.map((question) => (
								<tr key={question.id}>
									<td>
										<h3 className="question">
											{question.id}.{question.title}
										</h3>
										{question.answers.map((answer) => (
											<div className="answers" key={answer}>
												<input
													onClick={() => this.props.selectAnswer({ question, answer })}
													id="option"
													type="radio"
													name="option"
													disabled={questionsDone
														.map((qnDone) => qnDone.question)
														.includes(question)}
												/>
												<label>{answer}</label>
											</div>
										))}
									</td>
								</tr>
							))}
						</thead>
					</table>
					<div>
						{/* <div className="pagination">
							{pages.map((page) => (
								<a key={page} href="#" onClick={this.onGoToNext}>
									{page}
								</a>
							))}
						</div> */}
						<Link to="/results" className="view_result">
							View your marks
						</Link>
						<button
							className="next_button"
							onClick={() => this.props.goToNextQuestion(currentQuestion)}
							disabled={currentQuestion >= 7}
						>
							Next
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('state', state);
	const { errors, auth, questions, resolve } = state;
	return {
		errors,
		auth,
		questions,
		resolve
	};
};

const connectedHomePage = connect(mapStateToProps, { selectAnswer, goToNextQuestion })(Home);
export { connectedHomePage as Home };
