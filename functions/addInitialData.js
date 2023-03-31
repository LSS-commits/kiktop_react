const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/dataHandler');
const { initialData } = require('./utils/initialData');

exports.handler = async function (event, context, callback) {

    // access the documents/collection
    const documents = await getCollection();

    // use initial data for posts/users
    const data = initialData;

    // create subdocuments inside the collection
    try {
        // loop over initialData to create users and their posts
        for (let i = 0; i < data.length; i++) { 
            // to create = id of subdoc + subdoc data (object)          
            await documents.create(data[i].id, data[i]);
        }
        
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    }    
}