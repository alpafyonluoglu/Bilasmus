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
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// TODO: Setup sessions

// Use routers
app.use('/', mainRouter);
app.use('/auth', authRouter);

// Handle errors
app.use((req, res, next) => {
    return next(createError(404));
});

app.use((err, req, res, next) => {
    let statusCode = err.status || 500;
    let obj = {
        code: statusCode,
        message: err.message
    };

    if (process.env.dev === "true" && statusCode === 500) {
        obj.errorStack = err.stack;
    }

    res.status(statusCode);
    res.json(obj);
});

module.exports = app;