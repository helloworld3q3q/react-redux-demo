/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-26 05:42:30
 * @modify date 2017-04-26 05:42:30
 * @desc [description]
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        return (
            <div>
                <img src = { this.props.user.thumbnail } />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateToProps)(UserDetail);