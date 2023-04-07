const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/dataHandler');

exports.handler = async function (event, context, callback) {

    // access the documents/collection
    const documents = await getCollection();

    // parse data before sending it to db
    const data = JSON.parse(event.body);
    console.log(data);
    
    // create a subdocument inside the collection
    try {
        const newDocument = await documents.create(data.id, data);
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    }    
}
