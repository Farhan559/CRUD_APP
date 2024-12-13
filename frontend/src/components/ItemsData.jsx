import React, { useEffect, useState } from 'react';
import { getAllItems, createItem, updateItem, deleteItem } from '../services/api';

function ItemsData() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getAllItems();
        setItems(data);
    };

    const handleAddItem = async () => {
        const item = { name: newItem }; // Example payload
        await createItem(item);
        fetchItems();
        setNewItem('');
    };

    const handleDeleteItem = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>
                        {item.name}{' '}
                        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}

export default ItemsData;
