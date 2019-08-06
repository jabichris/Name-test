export const markQestion = (payload) => {
	const { question, answer } = payload;
    const marks = question.rightAnswer === answer ? question.marks : 0;
    return marks;
};
