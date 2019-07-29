
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('tipoPersona', function(table) {
            table.increments('id').primary();
            table.string('nombre');
        })
        ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tipoPersona'),
    ]);
};
