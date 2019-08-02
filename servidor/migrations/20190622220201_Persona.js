
exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('persona', function(table){
        table.increments('id').primary();
        table.string('CI');
        table.string('nombres').notNullable();
        table.string('apellidos').notNullable();
        table.string('telefonoCelular').notNullable();
        table.string('direccionDomiciliaria').notNullable();
        table.string('correoElectronico').notNullable();
        table.string('contrasena').notNullable();
        table.string('usuario').notNullable();
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('persona'),
    ]);
};
