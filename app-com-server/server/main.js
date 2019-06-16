const express = require('express');
const port = 3000;

const server = express();

let users = {
    'André': {
        password: '12345',
        state: {
            todos: [
                {key: 0, text: 'Levar a cachorra pra passear'},
                {key: 1, text: 'Lavar a louça do almoço'},
            ],
            new_key: 2,
        },
    }
};



function new_user(username, password) {
    users[username] = {
        password: password,
        state: {
            todos: [],
            new_key: 0,
        }
    };
}

server.use('/static', express.static('build'))
server.use(express.json());
server.use(express.urlencoded());

server.get('/', (req, res) => {
    res.redirect("static/index.html");
});

server.post('/api/get-state', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users[username];
    if (!user) {
        res.send({
            error: "User does not exist",
        });
    } else if (user.password != password) {
        res.send({
            error: "Wrong password",
        });
    } else {
        res.send(user.state);
    }
});

server.post('/api/set-state', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const state = req.body.state;

    const user = users[username];
    if (!user) {
        res.send({
            error: "User does not exist",
        });
    } else if (user.password != password) {
        res.send({
            error: "Wrong password",
        });
    } else {
        user.state = state;
        res.end();   
    }
});

server.listen(port, () => console.log(`Listening on port ${port}`));