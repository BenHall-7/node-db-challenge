let status = require("http-status-codes");

module.exports = function(req, res, next) {
    if (typeof req.body == "object") {
        if (typeof req.body.name == "string") {
            if (req.body.description != undefined
                && req.body.description != null
                && typeof req.body.description != "string") {
                res.status(status.BAD_REQUEST).json({error: "Request body 'description' field must either be string or undefined"});
            } else {
                next();
            }
        } else {
            res.status(status.BAD_REQUEST).json({error: "Request body missing a 'name' (string) field"})
        }
    } else {
        res.status(status.BAD_REQUEST).json({error: "Missing request body"});
    }
}