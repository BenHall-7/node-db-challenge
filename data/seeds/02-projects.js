exports.seed = function(knex) {
    return knex('projects').insert([
        { name: "Set up database", completed: true },
        { name: "Get pizza", description: "Preferably Domino's", completed: false }
    ]);
};
