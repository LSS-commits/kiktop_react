/* Connect with Astra */
const { createClient } = require("@astrajs/collections");
const { REACT_APP_ASTRA_DB_ID, REACT_APP_ASTRA_DB_REGION, REACT_APP_ASTRA_DB_KEYSPACE, REACT_APP_ASTRA_DB_APPLICATION_TOKEN } = process.env;

let astraClient = null;

// name the collection
const collection = 'posts';

const getAstraClient = async () => {

    // create an Astra client
    if (astraClient === null) {
        astraClient = await createClient({
            astraDatabaseId: REACT_APP_ASTRA_DB_ID,
            astraDatabaseRegion: REACT_APP_ASTRA_DB_REGION,
            applicationToken: REACT_APP_ASTRA_DB_APPLICATION_TOKEN,
        },
        30000
        );
    }
    return astraClient;

};

// access the collection
const getCollection = async () => {

    const documentClient = await getAstraClient();

    return documentClient
    .namespace(REACT_APP_ASTRA_DB_KEYSPACE)
    .collection(collection);    
};

module.exports = { getAstraClient, getCollection };