const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/helper');
const { initialData } = require('./utils/initialData');

exports.handler = async function (event, context) {
   
    // access the documents
    const documents = await getCollection();

    // initial data for posts/users
    const data = initialData;
        
    // create posts/users
    try {
        for (let i = 0; i < data.length; i++) {
            await documents.create(data[i].id, data[i]);
        };
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    };
}