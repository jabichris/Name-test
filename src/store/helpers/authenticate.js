import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions';
import { API_URL } from '../../constants';
import { setAuthToken } from './setAuthToken';
import { history } from '../helpers/history'

export const setCurrentUser = decoded =>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
}
export const removeCurrentUser = () =>{
    return {
        type: REMOVE_CURRENT_USER
    };
}

export const loginUser = (history) => dispatch => {
    axios.post(`${API_URL}/users/login`,{email:"akimanaja17@gmail.com",password:"P@ssword1"})
    .then(res=>{
        console.log('Google auth:=======>',res)
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));
        history.push('/')
    })
    .catch(error=>{
        console.log('User from user log errors:',error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(removeCurrentUser());
}
