import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';

class UserList extends Component {
    
    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
            );
        });
    }

    render() {
        return (
            <ul>
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(UserList);