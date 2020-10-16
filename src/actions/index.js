import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS';
export const GET_EVENT = 'GET_EVENT';
export const POST_EVENTS = 'POST_EVENTS';
export const DELETE_EVENTS = 'DELETE_EVENTS';
export const UPDATE_EVENT = 'UPDATE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERY_STRING = '?token=token123';

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERY_STRING}`);
    // dispatchしてreducerに渡す
    dispatch({type: GET_EVENT, response});
};

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`);
    // dispatchしてreducerに渡す
    dispatch({type: READ_EVENTS, response});
};

export const postEvents = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERY_STRING}`, values);
    // dispatchしてreducerに渡す
    dispatch({type: POST_EVENTS, response});
};

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERY_STRING}`, values);
    dispatch({type: UPDATE_EVENT, response});
}

export const deleteEvents = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERY_STRING}`);
    // dispatchしてreducerに渡す
    dispatch({type: DELETE_EVENTS, id});
};
