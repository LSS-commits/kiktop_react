/* Connect with Astra */
const { createClient } = require("@astrajs/collections");

let astraClient = null;

// name the collection
const collection = 'ktcollection';


const getAstraClient = async () => {

    // create an Astra client
    if (astraClient === null) {
        astraClient = await createClient({
            astraDatabaseId: process.env.ASTRA_DB_ID,
            astraDatabaseRegion: process.env.ASTRA_DB_REGION,
            username: process.env.ASTRA_DB_USERNAME,
            password: process.env.ASTRA_DB_PASSWORD,
        });
    }

    return astraClient;

};

// access the collection
const getCollection = async () => {

    const documentClient = await getAstraClient();

    return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

};


module.exports = { getAstraClient, getCollection };