const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: `${formulario.email}`, // Cambialo por tu email
 pass: `${formulario.password}`, // Cambialo por tu password
},
tls: {
    // no fallar en certs inválidos
    rejectUnauthorized: false
},
});
 const mailOptions = {
 from: `"${formulario.nombre}"<${formulario.email}>`,
 to: "rsp.cedeno@yavirac.edu.ec", // Cambia esta parte por el destinatario
 subject: formulario.asunto,
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };
 console.log(mailOptions)
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(sendmail);
 });
}