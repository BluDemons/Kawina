
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('detalleVenta', function(table){
            table.increments('id').primary();
            table.string('descripcion');
            table.integer('idPersona').references('id').inTable('persona');
            table.integer('idTienda').references('id').inTable('tienda');
            table.integer('idPatronaje').references('id').inTable('patronajes');
            table.integer('idCursos').references('id').inTable('cursos');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('detalleVenta'),
      ])
  };
  