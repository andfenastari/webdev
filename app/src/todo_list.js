import React from 'react';
import Todo from './todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            new_key: 0,
            todos: [],
            text: "",
        };
    }

    renderTodos() {
        
        return this.state.todos.map(todo => {
            return <Todo key={todo.key} id={todo.key} text={todo.text} onDelete={this.deleteTodo.bind(this)} />
        });
        
    }

    deleteTodo(key) {
        let todos_without_key = this.state.todos.filter(todo => todo.key != key);
        this.setState({
            todos: todos_without_key,
        });
    }

    textChange(e) {
        let todo_text = e.target.value;
        this.setState({
            text: todo_text,
        })
    }

    addTodo(e) {
        e.preventDefault();
        let key = this.state.new_key;
        let todo = {key: key, text: this.state.text};
        let new_todos = [...this.state.todos, todo];
        this.setState({
            new_key: key + 1,
            todos: new_todos,
            text: "",
        });
    }

    render() {
        return (
            <div className="list">
                <ul>
                    {this.renderTodos()}
                </ul>
                <form onSubmit={this.addTodo.bind(this)}>
                    <input
                        className="todo-input"
                        placeholder="Todo"
                        value={this.state.text}
                        onChange={this.textChange.bind(this)}/>
                    <button type="submit">Add to-do</button>
                </form>
            </div>
        );
    }
}