const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vaccineSchema = new Schema({
  vaccination_center: String,
  choice_vaccine: String,
  title: String,
  first_name: String,
  last_name: String,
  dob: String,
  phone_number: String,
  id_card: String,
  address: String,
  province: String,
  district: String,
  subdistrict: String,
  code: String,
},{ collection: 'vaccines' })

const VaccineModel = mongoose.model('Vaccine', vaccineSchema)

module.exports = VaccineModel
