import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import TodoList from './todo_list';

class App extends React.Component {
    render() {
        return (
            <TodoList />
        );
    }
}


const root = document.getElementById("root");
ReactDOM.render(<App />, root);
