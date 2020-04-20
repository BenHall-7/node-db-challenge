let status = require("http-status-codes");

module.exports = function(req, res, next) {
    if (typeof req.body == "object") {
        if (typeof req.body.description == "string") {
            if (req.body.notes != undefined
                && req.body.notes != null
                && typeof req.body.notes != "string") {
                res.status(status.BAD_REQUEST).json({error: "Request body 'description' field must either be string or undefined"});
            } else if (req.body.completed != undefined
                && typeof req.body.completed != "boolean") {
                res.status(status.BAD_REQUEST).json({error: "Request body 'completed' field must either be boolean or undefined"})
            } else {
                next();
            }
        } else {
            res.status(status.BAD_REQUEST).json({error: "Request body missing a 'description' (string) field"})
        }
    } else {
        res.status(status.BAD_REQUEST).json({error: "Missing request body"});
    }
}