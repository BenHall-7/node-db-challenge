
exports.up = function(knex) {
    knex.schema.createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique();
        tbl.string("description").nullable().defaultTo(null);
    }).createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name").notNullable().unique();
        tbl.string("description").nullable().defaultTo(null);
        tbl.boolean("completed").defaultTo(false);
    }).createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description").notNullable();
        tbl.string("notes").nullable().defaultTo(null);
        tbl.boolean("completed").defaultTo(false);
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("cascade")
            .onDelete("cascade");
    }).createTable("project_resources", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("cascade")
            .onDelete("cascade");
        tbl.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onUpdate("cascade")
            .onDelete("cascade");
    })
};

exports.down = function(knex) {
    knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
};
