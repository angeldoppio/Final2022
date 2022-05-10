const express = require('express')
const app = express()
const Vaccine = require('./models/vaccine')
const mongoose = require('mongoose')

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://NattyAngela:tupinten3610@final-sw-tools.nkffz.mongodb.net/DBcollection?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
}).then(res => console.log("Database Connect"))


app.use(express.json())
const vaccineRouter = require('./controllers/vaccineController')
app.use(vaccineRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})
