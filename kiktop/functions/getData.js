const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/helper');

exports.handler = async function (event, context) {

    // access the documents
    const documents = await getCollection();

    // get the documents
    try {
        const results = await documents.find({});
        return responseObj(200, Object.keys(results).map((i) => results[i]));
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    }
};