// getting access to express framework
const express = require('express');

// getting access to all controller function
const controller = require('../controllers/controller');

// to create a router
const router = express.Router(); 

// defining routes and its controller function
router.route('/post').post(controller.saveInformation); // to save user information in databse
router.route('/user-list').get(controller.getData);
router.route('/user-data/:id').get(controller.getDateById);
router.route('/delete').delete(controller.delete);


// exporting router
module.exports = router;