const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const serviceRoot = '/autoSearch/v1/api';

const unless = (routeArray, middleware) => {
    console.log(routeArray);
    console.log(middleware);
    return middleware
}

app.use(bodyParser.json());
app.use(cors())

app.use(serviceRoot, require('./routes/autoSearch'));

app.listen(5000, () => {
    console.log('app is listening at port 5000');
})


