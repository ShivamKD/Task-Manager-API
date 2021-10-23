const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    service: 'yahoo',
    secure: false,
    auth: {
        user: 'kraj554@ymail.com',
        pass: process.env.EMAIL_PASS
    },
    debug: false,
    logger: true
})


const sendWelcomeEmail = (email, name) => {
    transporter.sendMail({
        from: 'kraj554@ymail.com',
        to: email,
        subject: 'Thanks for Joining In',
        text: `Hi,
        
Welcome ${name}, 

Good to see you here. Start creating your Task.
        
Regards,
Shivam Kumar Dubey
Node JS Developer`
    }, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email Sent: ' + info.response)
        }
    })
}

const sendCancelationEmail = (email, name) => {
    transporter.sendMail({
        from: 'kraj554@ymail.com',
        to: email,
        subject: 'Sorry to see you go',
        text: `Hello,
Good Bye ${name},
        
Hope to see you back soon.

Regards,
Shivam Kumar Dubey
Node JS Developer`
    }, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email Sent: ' + info.response)
        }
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'kraj554@ymail.com',
//         subject: 'Thanks for Joining in!',
//         text: `Welcome to app, ${name}. Let me know how you get along with the app.`
//     }).then(() => {
//         console.log('Email Sent')
//     }).catch(() => {
//         console.log('email not sent')
//     })
// }

// const sendCancelationEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'kraj554@ymail.com',
//         subject: 'Sorry to see you go!!!',
//         text: `Goodbye ${name}, Hope to see you back soon.`
//     }).then(() => {
//         console.log('Cancellation Email Sent')
//     }).catch(() => {
//         console.log('Cancellation Email not Sent')
//     })
// }

// module.exports = {
//     sendWelcomeEmail,
//     sendCancelationEmail
// }