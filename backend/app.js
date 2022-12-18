// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require( 'express-session');
const createError = require( 'http-errors');
const cors = require('cors');
require('dotenv').config({path: __dirname +'/secure/.env'})
const db = require("./controllers/DatabaseController");
require("./controllers/UserController");
require("./controllers/GcpFileStorageController");
const Session = require("./models/Session");

// Routers
const mainRouter = require('./routes/MainRouter').getRouter();
const authRouter = require('./routes/AuthRouter').getRouter();
const fileSystemRouter = require('./routes/FileSystemRouter').getRouter();
const databaseRouter = require('./routes/DatabaseRouter').getRouter();
const userRouter = require('./routes/UserRouter').getRouter();

// Global variables
global.dbConnected = false;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    credentials: true,
    origin: "*",
    allowedHeaders: ["Content-Type", "Cookie", "*"],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// // Setup sessions
// let options = {
//     secret: process.env.COOKIE_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     name: 'sessionID',
//     signed: true,
//     cookie: { // TODO: prevent secure and sameSite for local
//         // secure: true,
//         // sameSite: 'none',
//         maxAge: 60 * 60 * 1000 // 1 hour
//     }
// }
// if (process.env.PRODUCTION === "false") { // Local
//     // Redis database
//     const RedisStore = require("connect-redis")(session)
//     const { createClient } = require("redis");
//     let redisClient = createClient({ legacyMode: true });
//     redisClient.connect().catch(console.error);
//
//     options.store = new RedisStore({
//         client: redisClient
//     });
// }
// else { // GCP
//     // Google Cloud Datastore database
//     const {Datastore} = require('@google-cloud/datastore');
//     const {DatastoreStore} = require('@google-cloud/connect-datastore');
//
//     options.store = new DatastoreStore({
//         kind: 'express-sessions',
//         expirationMs: 0,
//         dataset: new Datastore({
//             projectId: process.env.GCLOUD_PROJECT,
//             keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
//         })
//     });
// }
// app.use(session(options));

// Get session info
app.use((req, res, next) => {
    let sessionID = req.query.s;
    if (!sessionID) {
        return next();
    }

    let session = new Session();
    session.setSessionID(sessionID);

    db.select(session, (result) => {
        if (result instanceof Error) {
            return next(result);
        }

        if (result.length > 0) {
            req.session = {
                sessionID: sessionID,
                userID: result[0].getUserID(),
                type: result[0].getType()
            };
        }

        return next();
    })
})

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