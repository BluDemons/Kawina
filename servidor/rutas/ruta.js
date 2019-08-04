;
const express = require('express')
let api = express.Router(),
  control = require('../controles/Kawina')

api.get('/leer',control.leerDatos)
api.post('/insertar', control.ingresarDatos)
api.delete('/borrar',control.deleteDatos)
api.put('/actualizar',control.actualizarDatos)

module.exports = api