import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVisibility, toggleTodo } from '../actions/index';
import ToDoList from '../compoments/todoList'

const getVisibleTodos = (todoList, filter) => {
    switch(filter) {
        case "SHOW_ALL":
            return todoList;
        case "SHOW_COMPLETED":
            return todoList.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todoList.filter(t => !t.completed);
    };
}

const mapStateToProps = (state) => {
    return {
        todoList: getVisibleTodos(state.todoList, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);