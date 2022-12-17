// install npm pg
const {Client} = require("pg");
const createError = require("http-errors");
const Model = require("../models/Model");

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

    select(model, callback) {
        if (!(model instanceof Model)) {
            return callback(createError(500, "DB encountered unknown object"));
        }

        let tableName = model.getTableName();
        let relations = model.getRelations();

        let params = [];
        let paramsIndex = 1;
        let query = 'SELECT * FROM "' + tableName + '" WHERE';

        relations.forEach((relation) => {
            let col = relation.col;
            let val = relation.get();

            if (val !== undefined) {
                params.push(val);
                query += (paramsIndex === 1 ? '' : ' AND') + ' "' + col + '" = $' + paramsIndex;
                paramsIndex++;
            }
        });

        this.client.query(query, params, function (error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            if (results.rows.length === 0) {
                return callback([]);
            }

            let result = [];
            results.rows.forEach((row) => {
                let clone = model.clone();

                let relations = clone.getRelations()
                relations.forEach((relation) => {
                    let col = relation.col;
                    relation.set(row[col]);
                });

                result.push(clone);
            })

            return callback(result);
        })
    }

    insert(model, callback) {
        if (!(model instanceof Model)) {
            return callback(createError(500, "DB encountered unknown object"));
        }

        let tableName = model.getTableName();
        let relations = model.getRelations();

        let params = [];
        let paramsIndex = 1;
        let queryP1 = 'INSERT INTO "' + tableName + '" (';
        let queryP2 = '(';

        relations.forEach((relation) => {
            let col = relation.col;
            let val = relation.get();

            if (val !== undefined) {
                params.push(val);
                queryP1 += (paramsIndex === 1 ? '' : ',') + '"' + col + '"';
                queryP2 += (paramsIndex === 1 ? '' : ',') + '$' + paramsIndex;
                paramsIndex++;
            }
        });
        let query = queryP1 + ') values ' + queryP2 + ')';

        console.log(query);

        this.client.query(query, params, function (error, results) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            return callback(true);
        })
    }

    update(model, callback) {
        if (!(model instanceof Model)) {
            return callback(createError(500, "DB encountered unknown object"));
        }

        let tableName = model.getTableName();
        let primaryKey = model.getPrimaryKey();
        let relations = model.getRelations();

        let primaryKeyVal = undefined;
        let params = [];
        let paramsIndex = 1;
        let query = 'UPDATE "' + tableName + '" SET';

        relations.forEach((relation) => {
            let col = relation.col;
            let val = relation.get();

            if (col === primaryKey) {
                primaryKeyVal = val;
                if (val === undefined) {
                    return callback(createError(500, "Missing primary key"));
                }
            }
            else if (val !== undefined) {
                params.push(val);
                query += (paramsIndex === 1 ? '' : ',') + ' "' + col + '" = $' + paramsIndex;
                paramsIndex++;
            }
        });

        params.push(primaryKeyVal)
        query += ' WHERE "' + primaryKey + '" = $' + paramsIndex;
        paramsIndex++;

        this.client.query(query, params, function (error, results) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            return callback(true);
        })
    }

    delete(model, callback) {
        if (!(model instanceof Model)) {
            return callback(createError(500, "DB encountered unknown object"));
        }

        let tableName = model.getTableName();
        let primaryKey = model.getPrimaryKey();
        let relations = model.getRelations();

        let primaryKeyVal = undefined;
        let params = [];
        let paramsIndex = 1;

        'DELETE FROM  "authData" WHERE "ID" = $1 '

        relations.forEach((relation) => {
            let col = relation.col;
            let val = relation.get();

            if (col === primaryKey) {
                primaryKeyVal = val;
                if (val === undefined) {
                    return callback(createError(500, "Missing primary key"));
                }
            }
        });

        params.push(primaryKeyVal)
        let query = 'DELETE FROM "' + tableName + '" WHERE "' + primaryKey + '" = $' + paramsIndex;
        paramsIndex++;

        this.client.query(query, params, function (error, results) {
            // If there is an issue with the query, output the error
            if (error) {
                return callback(createError(500, error.message));
            }

            return callback(true);
        })
    }

    // TODO: Remove
    getUsers = (request, response) => {
        this.client.query('SELECT * FROM public."authData" ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }

    // TODO: Remove
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
