const config = require("../config/dbConfig");
const esClient = require("../clients/elasticSearchClient");
const { Op } = require("sequelize");
const uuid = require("uuid");

exports.autoSearch = async (req, res) => {
    const { searchTerm } = req.body;
    try {
        const response = await esClient.search({
            index: 'auto-search',
            type: 'employees',
            body: {
                query: {
                    query_string: {
                        "query": `*${searchTerm}*`,
                        "fields": ["FirstName", "LastName"]
                    }
                }
            }
        });

        const { body: { hits: { hits } } } = response;

        const users = hits.map(element => {
            return {
                fullName: `${element._source.FirstName} ${element._source.LastName}`
            }
        });

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}