const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port:587,
    secure: true,
    secureConnection:false,
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_PASSWORD
    }
})

const sendEmail = async (email, mailContent)=>{
   try {
     const info = await transporter.sendMail({
         from: process.env.ADMIN_MAIL,
         to: email,
         subject: mailContent.subject,
         html: mailContent.html
     })
     return info
   } catch (error) {
        console.log('Error While Sending Mail',error.message);
   }
}
module.exports = sendEmail

