/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-04-25 06:05:34
 * @modify date 2017-04-25 06:05:34
 * @desc [description]
*/
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';
import AddTodo from '../containers/addTodo';
import Footer from './footer';
import VisibileTodoList from '../containers/visibileTodoList';


require('../../less/style.less');

const App = () => (
    <div>
        <h2>Username List:</h2><hr/>
        <UserList/>
        <h2>User details:</h2>
        <UserDetails  />
        <hr/>
        <AddTodo/>
        <hr/>
        <VisibileTodoList/>
        <hr/>
        <Footer/>
    </div>
);

export default App;