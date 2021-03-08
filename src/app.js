const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dbMidllewares = require('./middlewares/db.js');
const todoRouter = require('./routes/todo.js');
const todosRouter = require('./routes/todos.js');
const app = express();
const port = 3001;

// Middlewares
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(dbMidllewares);

// Routes
app.use(todosRouter);
app.use(todoRouter);

app.listen(port, () => {
    console.log(`Server started on localhost: ${port}`);
});
