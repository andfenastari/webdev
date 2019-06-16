import React from 'react';

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username_text: "",
            password_text: "",
        };
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.logIn.bind(this)}>
                    Username:
                    <input type="text" value={this.state.username_text} onChange={this.usernameChange.bind(this)}></input>
                    <br/>
                    Password:
                    <input type="text" value={this.state.password_text} onChange={this.passwordChange.bind(this)}></input>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }

    usernameChange(e) {
        this.setState({
            username_text: e.target.value,
        });
    }
    passwordChange(e) {
        this.setState({
            password_text: e.target.value,
        });
    }

    logIn() {
        this.props.onLogin(this.state.username_text, this.state.password_text);
    }
}