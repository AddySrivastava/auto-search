const { Client } = require("@elastic/elasticsearch");

module.exports = new Client({
    node: 'https://212c20037f994853ac27c285a046b985.ap-south-1.aws.elastic-cloud.com:9243/',
    auth: {
        username: 'elastic',
        password: 'CoxY7ytDMYonnRJi27qpLQu5'
    }
});