const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    startDate: Date,
    endDate: Date
});

module.exports = mongoose.model('Course', CourseSchema);
