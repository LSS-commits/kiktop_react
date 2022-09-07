const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/helper');

exports.handler = async function (event, context) {
   
    // access the documents
    const documents = await getCollection();

    
        
    // create posts/users
    try {
        
        // const doc = await documents.create(id, {

        // });
        
        
        return responseObj(200);

    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    };

}