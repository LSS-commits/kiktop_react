const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/dataHandler');

exports.handler = async function (event, context, callback) {
    
    // access the documents/collection
    const documents = await getCollection();

    // get the documents
    try {
        const response = await documents.find({});
        return responseObj(200, response);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    } 
}
