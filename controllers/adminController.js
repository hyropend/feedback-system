const nodemailer = require('../config/emailConfig');
const User = require('../models/User');
const Feedback = require('../models/Feedback');

exports.sendFeedbackForm = async (req, res) => {
    const { course, date, topic, feedbackText } = req.body;
    const users = await User.find({ registeredCourses: course });

    users.forEach(user => {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: `Feedback Form for ${course}`,
            text: `Please fill out the feedback form for ${course} on ${date} regarding ${topic}: http://localhost:3000/feedback/form/${course}/${date}/${topic}`
        };

        nodemailer.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });

    res.send('Feedback forms sent!');
};
