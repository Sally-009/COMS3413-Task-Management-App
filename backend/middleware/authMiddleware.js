const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
    let token = req.headers["x-auth-token"] || req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ message: "Authorization denied" });
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trim();
    }
    try{
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("token error", error);
        res.status(400).json({ message: "Token is not valid" });
    }
};