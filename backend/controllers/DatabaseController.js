// install npm pg
const {Client} = require("pg");
const createError = require("http-errors");

class DatabaseController {
    static #instance = null;
    client;

    static getInstance() {
        if (this.#instance === null) {
            this.#instance = new DatabaseController();
        }
        return this.#instance;
    }

    // Assume private constructor
    constructor() {
        // credentials to connect to database
        this.client = new Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            URL: process.env.DB_URL,
        });

        this.connect();
    }

    connect(callback) {
        this.client.connect(function(err) {
            if (err) {
                if (!err.message.includes("Client has already been connected")) {
                    dbConnected = false;
                    if (callback !== undefined) {
                        return callback(createError(500, err.message));
                    }
                }
                else {
                    dbConnected = true;
                    if (callback !== undefined) {
                        return callback({
                            connected: true,
                            message: "Already connected"
                        });
                    }
                }
                // throw err;
            }
            else {
                dbConnected = true;
                console.log("DB Connected!");
                if (callback !== undefined) {
                    return callback({
                        connected: true
                    });
                }
            }
        });
    }

    getUsers = (request, response) => {
        this.client.query('SELECT * FROM public."authData" ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    getUserById = (request, response) => {
        const id = parseInt(request.params.id)

        this.client.query('SELECT * FROM public."AuthData" WHERE "Bilkent ID" = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
}

module.exports = DatabaseController.getInstance();
