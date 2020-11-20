const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config/dbConfig');

module.exports = async (req, res, next) => {
    const routeArray = ['/loginUser', 'addUser', 'updateAppointment', 'getAutoSearch'];

    try {
        if (routeArray.some(route => {
            return req.path.includes(route);
        })) {
            return next();
        }

        let token = req.headers.authorization;

        if (!token.includes('Bearer')) return res.status(401).json({ msg: 'Only bearer type auth is supported' });

        token = token.replace('Bearer ', "");

        if (await jwt.verify(token, config.secret)) {
            return next();
        }

        return res.status(401).json({ msg: 'Not authorized' });
    } catch (err) {
        return res.status(401).json({ msg: 'Not authorized' });
    }
}