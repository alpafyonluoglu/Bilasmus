// install npm pg
const {Client} = require("pg");

// credentials to connect to database
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    URL: process.env.DB_URL,
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


const updateUser = async (ID) => {
    const query = 'UPDATE "Coordinators" SET "Bilkent ID" = 1000 WHERE "Bilkent ID" = 7013';
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
updateUser(1000).then( result => {
    if(result)
    {
        console.log("updated");
    }
})



