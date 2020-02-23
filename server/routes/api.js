const express = require("express");
const router = express.Router();
const dataController = require('../controllers/dataController')

router.get('/clients', dataController.getAllClients)
router.post('/clients', dataController.addNewClient)
router.get('/errortest', (req, res) => {throw "Test error"})

module.exports = router