import _ from 'lodash'
import {DELETE_EVENTS, GET_EVENT, READ_EVENTS, POST_EVENTS, UPDATE_EVENT} from '../actions'

// reducersは関数として定義する
export default (events = {}, action) => {
    switch (action.type) {
        case GET_EVENT:
        case POST_EVENTS:
        case UPDATE_EVENT:
            const data = action.response.data;
            console.log(data);
            return {...events, [data.id]: data};
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENTS:
            delete events[action.id];
            return {...events};
        default:
            console.log('no implemets action');
            return events
    }
}
