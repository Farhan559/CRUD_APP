const Item = require('../models/itemModel');

// Get All Items

exports.getAllItems = async(req,res)=>{
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message:'Error fetching items',error});
    }
};
// Create a New Item
exports.createItem = async(req,res)=>{
    try {
        const newItem = await Item.create(req.body); //
        
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({message:'Error Creating Item',error});
    }
}

//Update an Item
exports.updateItem = async(req,res)=>{
    try {
        const updateItem = await Item.findByIdAndUpdate(req.params.id, req.body,{
            new:true })
            if(!updateItem) return res.status(404).json({message:'Item not found'});
            res.status(200).json(updatedItem);
        
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });;
    }
}
//Delete an Items

exports.DeleteItem = async (req,res)=>{
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id);
        if(!deleteItem) return res.status(404).json({message: 'Item not found'});
        res.status(200).json({message:'Item deleted successfully'});

    } catch (error) {
        res.status(500).json({message:'Error deleting Item',error});
        
    }
}