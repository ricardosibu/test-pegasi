const express = require('express');
const PersonController = require('../controllers/person');

const router = express.Router();

router.get('/home', PersonController.main);
router.post('/saveperson', PersonController.personSave);
router.get('/person', PersonController.getAllPerson);
router.get('/person/:id', PersonController.getPerson);
router.put('/person/:id', PersonController.updatePerson);
router.delete('/person/:id', PersonController.deletePerson);

module.exports = router;