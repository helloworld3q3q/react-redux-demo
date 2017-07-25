import { connect } from 'react-redux';
import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        let todoList = this.props.todoList;

        return todoList.map((todo) => {
            return (
                <li style={{textDecoration : todo.completed ? 'line-through' : 'none'}} 
                    key={todo.id} onClick={ () => {this.props.onTodoClick(todo.id)}}> 
                    { todo.text }
                </li>
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

export default ToDoList;