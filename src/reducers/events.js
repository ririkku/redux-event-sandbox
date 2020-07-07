import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// reducersは関数として定義する
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id');
    default:
      console.log('no implemets action');
      return events
  }
}