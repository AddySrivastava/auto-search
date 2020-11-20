const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

const serviceRoot = '/autoSearch/v1/api';

const unless = (routeArray, middleware) => {
    return middleware
}

app.use(bodyParser.json());
app.use(cors())

// base health check
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'app is listening at port 5000' })
})

// register routes
app.use(serviceRoot, require('./routes/autoSearch'));

app.listen(5000, () => {
    console.log('app is listening at port 5000');
})


