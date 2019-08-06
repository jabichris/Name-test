import { GET_QUESTIONS, RESOLVE_QN, SELECT_ANSWER, GO_NEXT } from '../actions';
import { getQns } from '../../services/fakeQuestions';
import { markQestion } from '../helpers/markQuestion';

const initalState = {
	currentQuestion: 1,
	totalMarks: 0,
	questionsDone: []
};

export const allQuestions = () => {
	return getQns();
};

export const resloveQn = (state = initalState, action) => {
	console.log('quiz reducer:', action);
	switch (action.type) {
		case SELECT_ANSWER:
			const { payload } = action;
			const { question, answer } = payload;
			const marks = state.totalMarks + markQestion(payload);
			return {
				...state,
				currentQuestion: question.id,
				totalMarks: marks,
				questionsDone: [
					...state.questionsDone,
					{
						question,
						answer,
						marks: markQestion(payload)
					}
				]
			};
		case GO_NEXT:
			if (action.payload >= 7) return state;
			else
				return {
					...state,
					currentQuestion: action.payload + 1
				};
		default:
			return state;
	}
};
