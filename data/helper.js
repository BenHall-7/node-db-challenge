const db = require("./dbConfig");

function getResources() {
    return db("resources");
}

function addResource(resource) {
    return db("resources")
        .insert(resource);
}

function getProjects() {
    return db("projects");
}

function addProject(project) {
    return db("projects")
        .insert(project);
}

function getTasks(project_id) {
    return db("tasks")
        .where({project_id})
}

function addTask(project_id, task) {
    return db("tasks")
        .insert({...task, project_id})
}

module.exports = {
    getResources,
    addResource,
    getProjects,
    addProject,
    getTasks,
    addTask
}