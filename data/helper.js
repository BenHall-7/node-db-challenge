const db = require("./dbConfig");

function getResources() {
    return db("resources");
}

function getResourceByID(id) {
    return db("resources")
        .where({id})
        .first()
}

function addResource(resource) {
    return db("resources")
        .insert(resource);
}

function getProjects() {
    return db("projects");
}

function getProjectById(id) {
    return db("projects")
        .where({id})
        .first()
}

function addProject(project) {
    return db("projects")
        .insert(project);
}

function getProjectTasks(project_id) {
    return db("tasks")
        .where({project_id})
}

function addProjectTask(project_id, task) {
    return db("tasks")
        .insert({...task, project_id})
}

module.exports = {
    getResources,
    getResourceByID,
    addResource,
    getProjects,
    getProjectById,
    addProject,
    getProjectTasks,
    addProjectTask
}