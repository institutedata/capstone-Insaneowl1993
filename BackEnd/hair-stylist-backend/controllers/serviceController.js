const { Service } = require('../models/Service');
const { asyncHandler } = require('../middleware');

// Fetch all services from the database
const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  res.status(200).json({ success: true, message: 'All Services Fetched', data: services });
});

// Fetch a single service by its ID
const getService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ success: false, message: 'Service not found' });
  }
  res.status(200).json({ success: true, message: 'Service Fetched', data: service });
});

// Create a new service in the database
const createService = async (req, res) => {
  try {
    const { name, duration, price } = req.body;
    const newService = new Service({ name, duration, price });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing service's details
const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a service from the database
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createService, getAllServices, getService, updateService, deleteService };
