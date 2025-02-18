const nodemailer = require("nodemailer");
const template = require("../templates/mailTemplate");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASSWORD
  }
})

module.exports.sendActivationMail = (email, token) => {
  transporter.sendMail({
    from: `IronStore <${process.env.NM_USER}>`,
    to: email,
    subject: "Thanks for joining IronStore.",
    html: template.generateEmail(token)
  })
} 