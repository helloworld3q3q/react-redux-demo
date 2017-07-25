/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-28 01:46:27
 * @modify date 2017-04-28 01:46:27
 * @desc [description]
*/
export const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }            
            break;
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
            break;
        default:
            return state
            break;
    }
}

export const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
            break;
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
            break;
        default:
            return state;
            break;
    }
}