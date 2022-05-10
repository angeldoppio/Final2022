const express = require("express");
const Product = require('../models/vaccine')
router = express.Router();

router.get('/vaccines', async (req, res) => {
  const vaccines = await Product.find({})
  res.json(vaccines)
})

router.get('/vaccines/:id', async (req, res) => {
  const { id } = req.params

  try {
    const vaccine = await Product.findById(id)
    res.json(vaccine)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/vaccines', async (req, res) => {
  const payload = req.body
  try {
    const vaccine = new Product(payload)
    await vaccine.save()
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router