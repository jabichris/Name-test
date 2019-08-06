import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/helpers/store';
import jwtDecode from 'jwt-decode';
import { setAuthToken } from './store/helpers/setAuthToken';
import { getQuestions } from './store/helpers/setQuestions';
import { setCurrentUser, logoutUser } from './store/helpers/authenticate';

import { App } from './components'

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    // store.dispatch(getQuestions());
    console.log('store:',store)

    const currentTime = Date.now() / 1000;
    if(decoded.exp<currentTime){
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}
render(  
    <Provider store={ store }>
        <App/>
    </Provider>,  
    document.getElementById("root")
);