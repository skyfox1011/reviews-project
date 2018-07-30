import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
    currentIndexReducer,
    pagesReducer,
    reviewTypeReducer,
    reviewIndexReducer} from './redux/reducer';
import Body from './container/Body.jsx';

const store = createStore(
    combineReducers({
        currentIndex: currentIndexReducer,
        pages: pagesReducer,
        reviewType: reviewTypeReducer,
        reviewIndex: reviewIndexReducer
    }),
    applyMiddleware(thunk)
);

render(
    <Provider store={store}>
        <Body />
    </Provider>
    , document.getElementById('app'));