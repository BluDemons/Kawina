;
let initVar = () => {
    // process.env.CLAVE_JWT = process.env.CLAVE_JWT || 'clave de desarrollo / cambiar en producción'
    process.env.PORT = process.env.PORT || 3001
        // process.env.OPCIONES_JWT = process.env.OPCIONES_JWT || JSON.stringify({expiresIn: 60 * 20, algorithm: 'HS256', jwtid: '5', keyid: '5'})
    process.env.CLIENT = process.env.CLIENT || 'pg'
    process.env.CONNECTION_DB = process.env.CONNECTION_DB || {
<<<<<<< HEAD
        host: '127.0.0.1',
        user: 'postgres',
        password: 'lenin1234',
        database: 'KAWINA-BDD'
    }
}

module.exports = {
=======
                                                                host: '127.0.0.1', 
                                                                user: 'postgres', 
                                                                password: 'roger130296', 
                                                                database: 'kawina'
                                                              }
  }
  
  module.exports = {
>>>>>>> da219e6ad2405e20218f067eabd7c66ded79d8ae
    initVar
}