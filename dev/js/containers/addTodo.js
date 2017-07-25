import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        let input = this.state.input;
        return(
            <div>
                <form onSubmit = {e => {
                    e.preventDefault();
                    if (!input.value.trim()) {return}
                    this.props.addTodo(input.value);
                    input.value = '';
                 }}>
                    <input type="text" ref = {node => {input = node}}/>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({addTodo: addTodo}, dispatch);
}

export default connect(null, macthDispatchToProps)(AddTodo);