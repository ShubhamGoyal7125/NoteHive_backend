const jwt = require('jsonwebtoken'); //Used for giving a token for login to the user
const JWT_SECRET = require("../config/keys").JWT_SECRET;

const fetchuser = (req, res, next) =>{
    //Get the user id from jwt token and add it to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: 'Please authenticate using a valid token'});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.log("error in fetchuser.js in middleware: " + error.message);
        res.status(401).send({error: 'Please authenticate using a valid token'});
    }

}
module.exports = fetchuser;