import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
      fullname: { type: String },
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postal: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    noOfTickets: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model('Booking', bookingSchema);
export default Booking;
