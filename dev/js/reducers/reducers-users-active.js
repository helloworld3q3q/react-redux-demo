/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-26 05:33:17
 * @modify date 2017-04-26 05:33:17
 * @desc [description]
*/
export default function(state = {}, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;  
            break;
        default:
            return state;
            break;
    }
    return state;
}