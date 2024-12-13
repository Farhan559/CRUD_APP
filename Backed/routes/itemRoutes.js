const express = require('express');
const router = express.Router();

const{
    getAllItems,
    createItem,
    updateItem,
    DeleteItem
}  = require('../controllers/itemController');

// Routes
router.get('/',getAllItems);
router.post('/',createItem);
router.put('/:id',updateItem);
router.delete('/:id',DeleteItem);



module.exports = router;
