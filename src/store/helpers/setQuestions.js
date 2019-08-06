import { GET_QUESTIONS, RESOLVE_QN } from '../actions';
import { getQns } from '../../services/fakeQuestions';

export const getQuestions = () => dispatch =>{ 
    dispatch(setQuestions());
}
export const setQuestions=()=>{
    return {
        type: GET_QUESTIONS,
		questions: getQns()
    }
}
export const resolveQuestion=(data)=>dispatch=>{
    console.log('We---->',data)
    dispatch({
        ...data,
        type: RESOLVE_QN
    })
}
