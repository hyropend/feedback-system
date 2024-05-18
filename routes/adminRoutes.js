const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/send-feedback', (req, res) => {
    res.render('sendFeedback');
});

router.post('/send-feedback', adminController.sendFeedbackForm);

module.exports = router;
