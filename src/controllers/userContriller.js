const userModel = require('../models/userModel');

exports.getUser = ( req, res ) =>{
    res.send("Get user");
};

exports.createUser = ( req, res ) => {
    res.send("Create user");
};
