// install npm pg
const {Client} = require("pg");

// credentials to connect to database
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "BilasmusDB",
    password: "764512Bilkent",
    port: 5433,
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


const updateUser = async (ID) => {
    const query = 'UPDATE "authData" SET "ID" = 1000 WHERE "ID" = 7001';
    try {
         await client.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();              // closes connection
    }
};

updateUser(7001).then(result => {  // userName, userRole, userId
    if (result) {
        console.log('User updated');
    }
});


