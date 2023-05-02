const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const insertToDB = async (data, collectionName) => {
    await client.connect();
    const database = client.db("Blog_Data");
    const collection = database.collection(collectionName);
    await client.connect();
    const dbResponse = await collection.insertMany(data);
    await client.close();
    return dbResponse;
}

const findFromDB = async (collectionName) => {
    await client.connect();
    const database = client.db("Blog_Data");
    const collection = database.collection(collectionName);
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse;
}

module.exports = {
    insertToDB, findFromDB
}