// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require( 'express-session');
const createError = require( 'http-errors');

// Routers
// TODO: Add other routers
const mainRouter = require('./routes/main');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// TODO: Setup sessions

// Use routers
app.use('/', mainRouter);

// Handle errors
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    let obj = {
        code: err.status,
        message: err.message
    };

    if (process.env.dev === "true") {
        obj.errorStack = err.stack;
    }

    res.status(err.status || 500);
    res.json(obj);
});

module.exports = app;