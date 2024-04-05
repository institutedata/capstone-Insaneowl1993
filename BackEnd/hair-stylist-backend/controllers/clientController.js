'use strict'
const { Client } = require('../models/Client');
const asyncHandler = require('../middleware/asyncHandler');

// Fetch all clients from the database
const getAllClient = asyncHandler(async (req, res) => {
  const clients = await Client.find({});
  res.status(200).json({ success: true, message: 'All Clients Fetched', data: clients });
});

// Fetch a single client by their ID
const getClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    return res.status(404).json({ success: false, message: 'Client not found' });
  }
  res.status(200).json({ success: true, message: 'Client Fetched', data: client });
});

// Create a new client in the database
const createClient = asyncHandler(async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json({ success: true, message: 'Client Created', data: client });
});

// Update an existing client's details
const updateClient = asyncHandler(async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!client) {
    return res.status(404).json({ success: false, message: 'Client not found' });
  }
  res.status(200).json({ success: true, message: 'Client Updated', data: client });
});

// Delete a client from the database
const deleteClient = asyncHandler(async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) {
    return res.status(404).json({ success: false, message: 'Client not found' });
  }
  res.status(200).json({ success: true, message: 'Client Deleted' });
});

module.exports = { getAllClient, getClient, createClient, updateClient, deleteClient };
