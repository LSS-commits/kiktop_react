/* connect with astra */
const { createClient } = require("@astrajs/collections");

const collection = 'posts';

exports.handler = async function (event, context, callback) {
    // create an Astra client
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        username: process.env.ASTRA_DB_USERNAME,
        password: process.env.ASTRA_DB_PASSWORD,
    });

    // access the posts
    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection);

    try {
        // create a post
        await posts.create("a post", {
            title: "my first post",
        });
        
        return {
            statusCode: 200
        }

    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

}