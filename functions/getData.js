const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/dataHandler');

exports.handler = async function (event, context, callback) {
    
    // access the documents/collection
    const documents = await getCollection();

    // get the documents
    try {
        const response = await documents.find({});
        // destructurate the data (get rid of the object keys and the status code)
        return responseObj(200, Object.keys(response.data).map((i) => response.data[i]));
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    } 
};
