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
    return getProjectById(project_id)
        .then(res2 => {
            if (res2) {
                return db("tasks")
                    .insert({...task, project_id})
            } else {
                return null;
            }
        })
}

function updateProject(id, project) {
    return getProjectById(id)
        .then(res2 => {
            if (res2) {
                return db("projects")
                    .where({id})
                    .update(project)
            } else {
                return null;
            }
        })
}

function updateResource(id, resource) {
    return getResourceByID(id)
        .then(res2 => {
            if (res2) {
                return db("resources")
                    .where({id})
                    .update(resouce)
            } else {
                return null;
            }
        })
}

function updateTask(id, task) {
    return db("tasks")
        .where({id})
        .first()
        .then(res2 => {
            if (res2) {
                return db("tasks")
                    .where({id})
                    .update(task)
            } else {
                return null;
            }
        })
}

module.exports = {
    getResources,
    getResourceByID,
    addResource,
    updateResource,

    getProjects,
    getProjectById,
    addProject,
    updateProject,

    getProjectTasks,
    addProjectTask,
    updateTask,
}