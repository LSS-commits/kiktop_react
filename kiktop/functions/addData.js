const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/helper');

exports.handler = async function (event, context) {
   
    // access the documents
    const documents = await getCollection();

    // parse data before sending it to db
    const data = JSON.parse(event.body);

    // create a post
    try {
        const newDocument = await documents.create(data.id, data);
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    };
}