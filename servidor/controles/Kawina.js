;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])
const bcrypt = require('bcrypt')             
const crypto = require('crypto')   

let leerDatos =(req,res)=>{
let tabla = req.query.tabla
let campo= req.query.campo
db.select(campo).from(tabla)
    .then(response=>{
       return res.status(200).json({
        data:response,
      })
    })
    .catch(error=>{
        return res.status(500).json({
            ok:false,
            data:null,
            mensaje:`error ${error}`
        })
    })

}
let ingresarDatos =(req,res)=>{
    let tabla = req.body.tabla
    let registro= req.body.registro
    db(tabla).returning('id').insert(registro)
    .then(response=>{
        return res.status(200).json({
            data:response,
        })
    })
    .catch(error=>{
        return res.status(500).json({
            ok:false,
            data:null,
            mensaje:`error${error}`//para programador
        })
    })
}





// let login =(req,res)=>{
//     let usuario = req.query.usuario
//     let contrasena= req.query.contrasena
//     db.select(campo).where('usuario', usuario).from('persona')
//         .then(response=>{

//            if (response.lenght > 0) {
//             bcrypt.compare(contrasena, response[0].contrasena, (err, ok) => {
//                 if(ok){
//                     response[0].contrasena = '***************'
//                     return res.status(200).json({
//                         ok:true,
//                         data: response
//                       })
//                 } else {
//                     return res.status(200).json({
//                         ok: false,
//                         data: null
//                       })
//                 }
               

//             })
//            }
            
//         })
//         .catch(error=>{
//             return res.status(500).json({
//                 ok:false,
//                 data:null,
//                 mensaje:`error ${error}`
//             })
//         })
    
// }

let deleteDatos =(req,res)=>{
    let tabla = req.body.tabla
    let id = req.body.id
    db(tabla).where('id',id).del()
    .then(response=>{
        return res.status(200).json({
            ok:true,
            data:response,
            mensaje:`se eliminó el registro ${response}`
        })
    })
    .catch(error=>{
        return res.status(500).json({
            ok:false,
            data:null,
            mensaje:`error ${error}`
        })
    })
}
 let actualizarDatos = (req,res)=>{
    let tabla = req.body.tabla
    let registros = req.body.registros
    registros.forEach(element => {
        db(tabla).where('id',element.id).update(element)
    .then(reponse=>{
        return res.status(200).json({
            ok:true,
             data:reponse,
             mensaje:`se actualizo el registro`   
        })
    })
    .catch(error=>{
        return res.status(500).json({
            ok:false,
            data:null,
            mensaje:`error ${error}`
        })
    })
})
}
module.exports = {
    leerDatos,
    ingresarDatos,
  deleteDatos,
  actualizarDatos,
//   login
}