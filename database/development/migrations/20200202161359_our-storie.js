
exports.up = function(knex) {
    return knex.schema.createTable("our-storie", tbl => {
        tbl.increments()

        tbl.string("title", 128).notNullable();
        tbl.string("date", 128).notNullable();
        tbl.string("description", 128).notNullable();
        tbl.integer("longitude", 128).notNullable();
        tbl.integer("latitude", 128).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("our-storie")
};
