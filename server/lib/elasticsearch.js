const esClient = require("../clients/elasticSearchClient");
const { EMPLOYEES_INDEX_NAME, EMPLOYEES_INDEX_TYPE } = require("../utils/constants");

/*
 * Generic lib function to return the matches based on searchTerm.
 * @searchTerm (String) - pattern that need to search
 * @fields (Array) - array of fields where we search the searchTerm pattern
 */
exports.wildcardSearch = async (searchTerm, fields) => {
    try {
        const response = await esClient.search({
            index: EMPLOYEES_INDEX_NAME,
            type: EMPLOYEES_INDEX_TYPE,
            body: {
                query: {
                    query_string: {
                        "query": `*${searchTerm}*`,
                        "fields": fields
                    }
                }
            }
        });

        if (response.statusCode !== 200) throw { statusCode: response.statusCode, errResponse: response.meta.body.error }

        const { body: { hits: { hits } } } = response;

        return hits;

    } catch (error) {
        console.log(error);
        throw { statusCode: error.statusCode, errResponse: error.meta.body.error };
    }
}