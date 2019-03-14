import {createStore, applyMiddleware, compose} from 'redux';//
import rootReducer from './reducers';//
import createSagaMiddleware from 'redux-saga';//
import rootSaga from './sagas/rootSaga';//

const sagaMiddleware = createSagaMiddleware();


export default (initialState) => {

    const window = global.window;
    let reduxDevToolsExtension = f => f;

    if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {

        reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__()
    }

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            reduxDevToolsExtension
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};