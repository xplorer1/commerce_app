var nodemailer = require('nodemailer');
var config = require('../../config');

var transporter = nodemailer.createTransport({
    host: "",
    port: "",
    auth: {
        user: "",
        pass: ""
    }
});

module.exports = {
	sendVerificationCodeMail: function sendVerificationCodeMail(recipients, verificationcode) {

		var mailOptions = {
		    from: '"Hello From E-Commerce App" <noreply@ecommerce.com>', // sender address
		    to: recipients, // list of receivers
		    subject: 'Welcome ✔', // Subject line
		    text: 'Hello! Welcome to E-Commerce App and thank you for signing up. To activate your account please verify your email address by typing this verification code into the form: ' + verificationcode + '. All future notifications will be sent to this email address.', // plaintext body
		    html: 'Hello!<br><br>Welcome to E-Commerce App and thank you for signing up.<br><br>To activate your account please verify your email address by typing the following verification code into the form:<br><br><strong>' + verificationcode + '</strong><br><br>All future notifications will be sent to this email address.<br><br>' // html body
		};

		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log('Mail Error: ', error, ' : ', new Date());
		    }
		});
	},
};