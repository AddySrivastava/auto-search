const elasticSearch = require("../lib/elasticsearch");
const { EMPLOYEES_WILDCARD_FIELDS } = require('../utils/constants')

exports.autoSearch = async (req, res) => {
    const { searchTerm } = req.body;

    try {
        // get the hits from the elasticsearch custom wrapper/lib
        const hits = await elasticSearch.wildcardSearch(searchTerm, EMPLOYEES_WILDCARD_FIELDS);

        // get the users from the hits and send only fullName to the client
        const users = hits.map(element => {
            return {
                fullName: `${element._source.FirstName} ${element._source.LastName}`
            }
        });
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json(error.errResponse);
    }
}