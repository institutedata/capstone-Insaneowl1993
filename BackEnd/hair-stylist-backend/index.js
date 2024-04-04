const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'KondeDB'; // Database name

const client = new MongoClient(url);

async function main() {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);
    // You can start manipulating your database here
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
