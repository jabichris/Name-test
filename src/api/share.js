import axios from 'axios';
import { API_URL } from '../constants';

const token = localStorage.getItem('jwtToken');
export default axios.create({
    baseURL: API_URL,
    headers:{
        authorization: token
    }
})