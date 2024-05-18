const Feedback = require('../models/Feedback');
const axios = require('axios');

exports.showForm = (req, res) => {
    const { course, date, topic } = req.params;
    res.render('feedbackForm', { course, date, topic });
};

exports.submitForm = async (req, res) => {
    const { course, date, topic } = req.params;
    const { feedbackText } = req.body;

    const feedback = new Feedback({
        courseName: course,
        date: new Date(date),
        topic: topic,
        feedbackText: feedbackText,
        submittedAt: new Date()
    });

    await feedback.save();

    // Send feedback to ChatGPT API
    const response = await axios.post(process.env.CHATGPT_API_URL, { text: feedbackText });
    feedback.summary = response.data.summary;

    await feedback.save();

    res.redirect('/feedback/summaries');
};

exports.showSummaries = async (req, res) => {
    const { courseName, date } = req.query;
    let query = {};

    if (courseName) query.courseName = courseName;
    if (date) query.date = new Date(date);

    const feedbacks = await Feedback.find(query);

    res.render('summaries', { feedbacks });
};


