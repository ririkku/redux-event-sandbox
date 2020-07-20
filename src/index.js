import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './index.css';
import reducer from './reducers'
import EventsNew from './components/events_new';
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

// reducerをstoreに設定する
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/events/new" component={EventsNew}/>
                <Route exact path="" component={EventsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
