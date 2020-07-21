import _ from 'lodash'
import {DELETE_EVENTS, READ_EVENTS} from '../actions'

// reducersは関数として定義する
export default (events = {}, action) => {
    switch (action.type) {
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
