const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    courseName: String,
    date: Date,
    topic: String,
    feedbackText: String,
    submittedAt: Date,
    summary: String
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
