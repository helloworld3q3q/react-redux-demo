/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-26 02:48:14
 * @modify date 2017-04-26 02:48:14
 * @desc [description]
*/
let nextTodoId = 0;
export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}