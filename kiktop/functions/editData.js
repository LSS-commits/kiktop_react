const { getCollection } = require('./utils/connection');
const { responseObj } = require('./utils/helper');

exports.handler = async function (event, context) {

    // access the documents
    const documents = await getCollection();

    /* check if we get the user id and if is_followed value is changed on click on Follow/ing buton */
    // parse data before sending it to db
    const body = JSON.parse(event.body);

    // check in the terminal
    // console.log(body);

    // update a document
    try {
        await documents.update(body.userId, body.data);
        return responseObj(200);
    } catch (error) {
        console.error(error);
        return responseObj(500, error);
    }
};