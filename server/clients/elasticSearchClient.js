const { Client } = require("@elastic/elasticsearch");
const { ES_HOST, ES_USERNAME, ES_PASSWORD } = require('../config');

module.exports = new Client({
    node: ES_HOST,
    auth: {
        username: ES_USERNAME,
        password: ES_PASSWORD
    }
});