import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { allQuestions, resloveQn } from './quizReducer';
import { getQns } from '../../services/fakeQuestions';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    questions: allQuestions,
    resolve: resloveQn
});
