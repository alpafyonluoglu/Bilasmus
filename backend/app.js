// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require( 'express-session');
const createError = require( 'http-errors');
const cors = require('cors');
require('dotenv').config({path: __dirname +'/secure/.env'})
require("./controllers/DatabaseController");
require("./controllers/UserController");
require("./controllers/GcpFileStorageController");

// Routers
const mainRouter = require('./routes/MainRouter').getRouter();
const authRouter = require('./routes/AuthRouter').getRouter();
const fileSystemRouter = require('./routes/FileSystemRouter').getRouter();
const databaseRouter = require('./routes/DatabaseRouter').getRouter();
const userRouter = require('./routes/UserRouter').getRouter();

// Global variables
global.dbConnected = false;

const app = express();

// TODO: Remove
// // Get sessionID (Modified due to CORS issues)
// app.use((req, res, next) => {
//     let modifiedCookies = req.cookies;
//     if (!modifiedCookies) {
//         modifiedCookies = [];
//     }
//
//     // req.rawHeaders.pop();
//     // req.rawHeaders.push("connect.sid=s%3A .g1ND1Ja%2FM2nTXeXv3kOuMxFQkIJtJH5bU3VzFu4wy8w; sessionID=s%3A XZwmFYsQOee-1H8hPgSmuC3_-LDkF5oh.ot1lSdoj2ifYzJEaoXRXvJtby293eMsL4neHIPBuYc4");
//
//     console.log(req.rawHeaders);
//
//     modifiedCookies["sessionID"] = req.query.s;
//     req.cookies = modifiedCookies;
//
//     // req.cookies
//
//     return next();
// })

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    credentials: true,
    origin: "https://bilasmus-app.web.app",
    allowedHeaders: ["Content-Type", "*"],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Setup sessions
let options = {
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'sessionID',
    signed: true,
    cookie: {
        // secure: true,
        // sameSite: 'none',
        maxAge: 60 * 60 * 1000 // 1 hour
    }
}
if (process.env.PRODUCTION === "false") { // Local
    // Redis database
    const RedisStore = require("connect-redis")(session)
    const { createClient } = require("redis");
    let redisClient = createClient({ legacyMode: true });
    redisClient.connect().catch(console.error);

    options.store = new RedisStore({
        client: redisClient
    });
}
else { // GCP
    // Google Cloud Datastore database
    const {Datastore} = require('@google-cloud/datastore');
    const {DatastoreStore} = require('@google-cloud/connect-datastore');

    options.store = new DatastoreStore({
        kind: 'express-sessions',
        expirationMs: 0,
        dataset: new Datastore({
            projectId: process.env.GCLOUD_PROJECT,
            keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
        })
    });
}
app.use(session(options));

// TODO: Remove
// // Get sessionID
// app.use((req, res, next) => {
//     console.log("----------");
//     console.log(req.sessionID);
//     console.log(req.session);
//     console.log("==========");
//     console.log(res.rawHeaders);
//     return next();
// })

// Setup routers
app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/file', fileSystemRouter);
app.use('/db', databaseRouter);
app.use('/user', userRouter);

// Handle errors
app.use((req, res, next) => {
    return next(createError(404));
});

app.use((err, req, res, next) => { // Do not remove "next" param
    let statusCode = err.status || 500;
    let obj = {
        code: statusCode,
        message: err.message
    };

    if (process.env.PRODUCTION === "false" && statusCode === 500) {
        obj.errorStack = err.stack;
    }

    res.status(statusCode);
    res.json(obj);
});

module.exports = app;