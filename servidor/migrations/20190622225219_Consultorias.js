
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('consultorias', function(table){
            table.increments('id');
            table.string('nombre');
            table.string('descripcion');
            table.integer('idTipoConsultoria').references('id').inTable('tipoConsulta');
            table.integer('idServicio').references('id').inTable('servicios');
        })
    ])
  };
  
  exports.down = function(knex, Promise) {
      return Promise.all([
          knex.schema.dropTable('consultorias'),
      ])
  };
  