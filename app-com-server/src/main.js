import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import TodoList from './todo_list';
import LogIn from './log_in';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: false,
            username: null,
            password: null,
        };
    }

    render() {
        if (this.state.logged_in) { 
            return (
                <div>
                    {`Hello, ${this.state.username}`}
                    <TodoList username={this.state.username} password={this.state.password}/>
                </div>
            );
        } else {
            return (
                <LogIn onLogin={this.onLogin.bind(this)}/>
            ); 
        }
    }

    onLogin(username, password) {    
        this.setState({
            logged_in: true,
            username: username,
            password: password,
        });
    }
}


const root = document.getElementById("root");
ReactDOM.render(<App />, root);
