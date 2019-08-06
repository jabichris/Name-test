import { SELECT_ANSWER, GO_NEXT } from './';

export const selectAnswer = (question) => {
    return {
        type: SELECT_ANSWER,
        payload: question
    }
};

export const goToNextQuestion = (currentQuestion) => {
    return {
        type: GO_NEXT,
        payload: currentQuestion
    }
};
