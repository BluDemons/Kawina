// const nodemailer = require('nodemailer');
// module.exports = (formulario) => {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: `${formulario.email}`, // Cambialo por tu email
//             pass: 'quemasbe', // Cambialo por tu password
//         },
//         tls: {
//             // do not fail on invalid certs
//             rejectUnauthorized: false
//         },
//     });
//     const mailOptions = {
//         from: `"${formulario.nombre}"<${formulario.email}>`,
//         to: "andresjuan11048@gmail.com", // Cambia esta parte por el destinatario
//         subject: formulario.asunto,
//         html: `
//  <strong>Nombre:</strong> ${formulario.nombre} <br/>
//  <strong>E-mail:</strong> ${formulario.email} <br/>
//  <strong>Mensaje:</strong> ${formulario.mensaje}
//  `
//     };
//     console.log(mailOptions)
//     console.log(formulario)
//     transporter.sendMail(mailOptions, function(err, info) {
//         if (err)
//             console.log(err)
//         else
//             console.log(sendmail);
//     });
// }