
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('inicio', function(table){
            table.increments('id').primary();
            table.string('titulo1');
            table.string('descripcion');
            table.string('objetivo');
            table.string('mision');
            table.string('vision');
            table.string('titulo2');
            table.text('imagen');
            table.string('descripcion1');
            table.string('titulo3');
            table.string('subtitulo1');
            table.string('descripcion2');
            table.string('subtitulo2');
            table.string('descripcion3');
            table.string('subtitulo3');
            table.string('descripcion4');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('inicio'),
    ])
};
