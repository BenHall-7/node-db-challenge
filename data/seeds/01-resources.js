exports.seed = function(knex) {
    return knex('resources').insert([
        { name: "Company Car", description: "Our only vehicle" },
        { name: "Company Pen", description: "Our only pen" },
        { name: "Company Computer", description: "The computer where we write the database" },
    ]);
};
