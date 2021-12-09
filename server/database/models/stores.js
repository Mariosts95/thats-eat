const mongoose = require('mongoose');
const { ProductSchema } = require('./pruduct');
const { addressSchema } = require('./address');

const WorkingHoursSchema = mongoose.Schema({
  open: { type: Number },
  close: { type: Number },
});

const StoreSchema = mongoose.Schema({
  name: { type: String, required: true },
  minDelivery: { type: Number },
  isOpen: { type: Boolean },
  workingHours: { type: WorkingHoursSchema },
  logo: { type: String },
  banner: { type: String },
  cuisines: [String],
  address: { type: addressSchema },
  rating: { type: Number },
  menu: [ProductSchema],
});

StoreSchema.index({ key: 1 });

// assign the document in the 'store' collection in db
const Store = mongoose.model('stores', StoreSchema);

module.exports = Store;
