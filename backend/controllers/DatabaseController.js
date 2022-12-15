// install npm pg
const {Client} = require("pg");

// credentials to connect to database
const client = new Client({
    user: "riwriwtt",
    host: "rogue.db.elephantsql.com",
    database: "riwriwtt",
    password: "U2fZjVCrY0AkW6IFuQfF2ZdOJ6uJd_pP",
    URL: "postgres://riwriwtt:U2fZjVCrY0AkW6IFuQfF2ZdOJ6uJd_pP@rogue.db.elephantsql.com/riwriwtt",
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let getUsers = (request, response) => {
    client.query('SELECT * FROM public."authData" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    client.query('SELECT * FROM public."AuthData" WHERE "Bilkent ID" = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {client,getUsers,getUserById}

