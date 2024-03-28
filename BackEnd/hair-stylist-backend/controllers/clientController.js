'use strict'
const {Client} = require('../models');
const { asyncHandler } = require('../middleware');




// @desc   Get All Clients
// @route  GET /api/client
const getAllClient = asyncHandler(async (req, res, next) => {
      try {
          const client = await Client.find({});

          res.status(200).json({ success: true, message: 'All Clients Fetch', data: client})
      } catch (error) {
         res
           .status(400)
           .json({ success: false, message: error.message }); 
      }
  })

// @desc   Get a Single Client
// @route  GET /api/client/:id
const getClient = asyncHandler(async (req, res, next) => {
  try {
      const client = await Client.findById(req.params.id);

      res.status(200).json({ success: true, message: 'Client Fetched', data: client})
  } catch (error) {
     res
       .status(400)
       .json({ success: false, message: error.message }); 
  }
})

// @desc   Create a new client
// @route  POST /api/client
const createClient = asyncHandler(async (req, res, next) => {
  //   const { name, email, phone } = req.body;
      console.log(req.body);
      try {
          const client = await Client.create(req.body);
          res.status(201).json({ success: true, message: 'Client Created', data: client})
      } catch (error) {
         res
           .status(400)
           .json({ success: false, message: error.message }); 
      }
  })
  

// @desc   Update a Client
// @route  PUT /api/client/:id
const updateClient = asyncHandler(async (req, res, next) => {
  try {
      const client = await Client.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

      res.status(200).json({ success: true, message: 'Client Updated', data: client})
  } catch (error) {
     res
       .status(400)
       .json({ success: false, message: error.message }); 
  }
})


// @desc   Delete a Client
// @route  DELETE /api/client/:id
const deleteClient = asyncHandler(async (req, res, next) => {
  try {
     const client = await Client.findById(req.params.id);

     if(!client) {
        res.status(404).json({ success: false, message: 'Client not found'})
     }

     await client.deleteOne();

      res.status(200).json({ success: true, message: 'Client Deleted', data: {}})
  } catch (error) {
     res
       .status(400)
       .json({ success: false, message: error.message }); 
  }
})


const clientController = { 
  createClient, getAllClient, getClient, updateClient, deleteClient };
module.exports = clientController