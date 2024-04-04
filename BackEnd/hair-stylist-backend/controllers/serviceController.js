const Service = require('../models/Service');
const { asyncHandler } = require('../middleware');


const getAllServices = asyncHandler(async (req, res, next) => {
  try {
    const Service = await Service.find({});
      console.log(Service);
      res.status(200).json({ success: true, message: 'All Services Fetch', data: Service})
  } catch (error) {
     res
       .status(400)
       .json({ success: false, message: error.message }); 
  }
})

const getService = asyncHandler(async (req, res, next) => {
  try {
      const Service = await Service.findById(req.params.id);

      res.status(200).json({ success: true, message: 'Service Fetched', data: Service})
  } catch (error) {
     res
       .status(400)
       .json({ success: false, message: error.message }); 
  }
})

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

const serviceController = { 
  createService, getAllServices, getService, updateService, deleteService };
module.exports = serviceController

