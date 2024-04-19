const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    packageType: { type: String, enum: ['Customized', 'Fixed Departures', 'Land Packages'], required: true },
    inclusions: [{ type: String }],
    exclusions: [{ type: String }],
    flightsInclusion: { type: Boolean, default: false },
    hotelInclusion: { type: Boolean, default: false },
    numberOfNights: { type: Number, required: true },
    dateOfDeparture: { type: Date, required: true },
    departureCity: { type: String, required: true },
    termsAndConditions: { type: String },
    packageDescription: { type: String, minlength: 250, maxlength: 300 },
    flights: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }],
    hotelsAccommodation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    policies: [{
        type: { type: String, enum: ['Cancellation', 'DateChange'] },
        description: { type: String }
    }],
    itineraries: [{
        day: { type: Number, required: true },
        title: { type: String, required: true },
        flight: { type: Boolean, default: false },
        hotel: { type: Boolean, default: false },
        activities: { type: Boolean, default: false },
        transfers: { type: Boolean, default: false },
        images: [{ type: String }]
    }]
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
