import React, {Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import {readEvents} from '../actions'
import {Link} from 'react-router-dom'

class EventsIndex extends Component {

    componentDidMount() {
        this.props.readEvents();
    }

    renderEvents() {
        return _.map(this.props.events, event => (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderEvents()}
                    </tbody>
                </table>

                <Link to="/events/new">新規作成</Link>
            </>
        )
    }
}

const mapStateToProps = state => ({events: state.events});
const mapDispatchToProps = dispatch => ({
    // key名は、render()の中のpropsとかと紐付けがあるっぽい
    // props.methodname: () => dispatch(actionMethodNamne)
    readEvents: () => dispatch(readEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
