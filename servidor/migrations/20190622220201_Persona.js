
exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('persona', function(table){
        table.increments('id').primary();
        table.string('CI');
        table.string('nombres');
        table.string('apellidos');
        table.string('telefonoConvencional');
        table.string('telefonoCelular');
        table.string('direccionDomiciliaria');
        table.string('correoElectronico');
        table.string('contraseña');
       }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('persona'),
    ]);
};
