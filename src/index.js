import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import reducer from './reducers'
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

// reducerをstoreに設定する
const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/events/new" component={EventsNew}/>
                <Route path="/events/:id" component={EventsShow}/>
                <Route exact path="" component={EventsIndex}/>
                <Route exact path="/events" component={EventsIndex}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
