const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/dataHandler');

exports.handler = async function (event, context, callback) {

    // access the documents/collection
    const documents = await getCollection();

    // create a subdocument inside the collection
    try {
        await documents.create();
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    }    
}
