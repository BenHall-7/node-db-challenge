exports.seed = function(knex) {
    return knex('tasks').insert([
        { description: "Write migration tables", completed: true, project_id: 1 },
        { description: "Write seeds", completed: true, project_id: 1 },
        { description: "Use the computer to find the nearest pizza store", project_id: 2 },
        { description: "Bring the pen to sign the check", project_id: 2 },
        { description: "Take the car to the store and buy the pizza", project_id: 2 },
    ]);
};
