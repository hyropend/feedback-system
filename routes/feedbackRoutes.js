const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackControllers');

router.get('/form/:course/:date/:topic', feedbackController.showForm);
router.post('/form/:course/:date/:topic', feedbackController.submitForm);
router.get('/summaries', feedbackController.showSummaries);

module.exports = router;
