import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
    }

    toggleDone() {
        this.setState({
            done: !this.state.done,
        })
    }

    render() {
        return (
            <li key={this.props.id} className={`todo-item ${(this.state.done) ? 'done' : ''}`}>
                <span onClick={this.toggleDone.bind(this)}>{this.props.text}</span>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </li>
        );
    }
}