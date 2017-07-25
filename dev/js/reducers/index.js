/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-25 05:51:08
 * @modify date 2017-04-25 05:51:08
 * @desc [description]
*/
import { combineReducers } from 'redux';
import UserReducer from './reducers-users';
import ActiveUserRedux from './reducers-users-active';
import { visibilityFilter } from './reducers-visibilityFilter';
import { todoList } from './reducers-todo';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserRedux,
    todoList: todoList,
    visibilityFilter: visibilityFilter
});

export default allReducers;