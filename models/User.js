const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    registeredCourses: [String]  // Kayıtlı olduğu kurslar listesi
});

module.exports = mongoose.model('User', UserSchema);
