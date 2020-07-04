import mongoose from "mongoose";

const ApartmentSchema = mongoose.Schema({
  typeOfRoom: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
    min: 0,
  },
  beds: {
    type: Number,
    required: true,
    min: 1,
  },
  arrangements: {},
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  typeOfHouse: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  essentials: {
    type: Boolean,
    required: false,
  },
  wifi: {
    type: Boolean,
    required: false,
  },
  tv: {
    type: Boolean,
    required: false,
  },
  heat: {
    type: Boolean,
    required: false,
  },
  ac: {
    type: Boolean,
    required: false,
  },
  iron: {
    type: Boolean,
    required: false,
  },
});

export default mongoose.model("Apartment", ApartmentSchema);
