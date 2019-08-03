;
const express = require('express')
let api = express.Router(),
control = require('../controles/Kawina')

api.get('/leer',control.leerDatos)
 api.post('/insertar', control.ingresarDatos)
api.delete('/borrar',control.deleteDatos)
api.put('/actualizar',control.actualizarDatos)
// api.post('/signup',control.signup)
// api.post('/signin ',control.signin)


module.exports = api