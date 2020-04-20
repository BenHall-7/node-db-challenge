const express = require("express");
const helper = require("./data/helper");
const status = require("http-status-codes");

const validateProject = require("./middleware/validateProject");
const validateResource = require("./middleware/validateResource");
const validateTask = require("./middleware/validateTask");

const server = express();

server.get("/projects", (req, res) => {
    helper.getProjects()
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err});
        })
})

server.get("/projects/:id", (req, res) => {
    helper.getProjectById(req.params.id)
        .then(res2 => {
            if (res2) {
                res.status(status.OK).json(res2);
            } else {
                res.status(status.BAD_REQUEST).json({error: "Unable to retrieve project with given ID"});
            }
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err})
        })
})

server.get("/resources", (req, res) => {
    helper.getResources()
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err});
        })
})

server.get("/projects/:id/tasks", (req, res) => {
    helper.getProjectTasks(req.params.id)
        .then(res2 => {
            res.status(status.OK).json(res2);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err});
        })
})

server.get("/resources/:id", (req, res) => {
    helper.getResourceByID(req.params.id)
        .then(res2 => {
            if (res2) {
                res.status(status.OK).json(res2);
            } else {
                res.status(status.BAD_REQUEST).json({error: "Unable to retrieve project with given ID"});
            }
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err})
        })
})

server.post("/projects", validateProject, (req, res) => {
    helper.addProject(req.body)
        .then(res2 => {
            res.status(status.CREATED).json(res2[0]);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err})
        })
})

server.post("/projects/:id/tasks", validateTask, (req, res) => {
    helper.addProjectTask(req.params.id)
        .then(res2 => {
            res.status(status.CREATED).json(res2);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err})
        })
})

server.post("/resources", validateResource, (req, res) => {
    helper.addResource(req.body)
        .then(res2 => {
            res.status(status.CREATED).json(res2[0]);
        })
        .catch(err => {
            res.status(status.INTERNAL_SERVER_ERROR).json({error: err})
        })
})

module.exports = server;