/* For CORS policies, stringifying and parsing data */

// response object
const responseObj = (statusCode, data) => {
    return {
        statusCode: statusCode,
        headers: {
          /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",  
        },
        body: JSON.stringify(data)
    };
};

// request object
const requestObj = (statusCode, data) => {
    return {
        statusCode: statusCode,
        body: JSON.parse(data)
    }
};

module.exports = {
    responseObj,
    requestObj
}