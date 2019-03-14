import React from 'react';//
import {hydrate as reactHydrate} from 'react-dom';//
import {Provider} from 'react-redux';//
import {BrowserRouter as Router} from 'react-router-dom';//

import App from './components/app/app';//
import createStore from "./store";//

import {click} from "./actions/common";//

const store = createStore();

window.addEventListener('click', () => {

    store.dispatch(click());
});


reactHydrate(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);