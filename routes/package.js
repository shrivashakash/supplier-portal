const express = require('express');
const package = express.Router();
const Package = require('../models/Offers');


package.post('/package', async (req, res) => {
    const { packagename, type, description, day, source, destination, amount } = req.body;

    // Check if all required fields are provided
    if (!packagename || !type || !description || !day || !source || !destination || !amount) {
        return res.status(400).json({ error: 'All required fields must be provided' });
    }

    try {
        const newPackage = new Package({ packagename, type, description, day, source, destination, amount });
        const savedPackage = await newPackage.save();
        res.status(201).json({ message: 'Package created successfully', data: savedPackage });
    } catch (error) {
        console.error('Error saving package to database:', error);
        res.status(500).json({ error: 'An error occurred while saving the package' });
    }
});

module.exports = package;