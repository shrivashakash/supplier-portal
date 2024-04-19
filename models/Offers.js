const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    packagename: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, require: true },
    img: { type: String, required: true, unique: true },
    day: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    amount: { type: Number, required: true }

});

const Offer = mongoose.model('offer', offerSchema);
module.exports = Offer;