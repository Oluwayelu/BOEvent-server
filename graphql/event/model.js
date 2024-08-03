import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      unique: true,
      required: true,
    },
    banner: [
      {
        type: String,
        required: true,
      },
    ],
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    venue: {
      type: { type: String, required: true },
      location: { type: String, required: true },
    },
    category: {
      type: String,
      required: true,
    },
    ticket: {
      type: {
        type: String,
        required: true,
      },
      stock: {
        type: Number,
        default: null,
      },
      stockType: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    time: {
      endDate: { type: Date },
      endTime: { type: String, required: true },
      startTime: { type: String, required: true },
      startDate: { type: Date, required: true },
      type: { type: String, required: true },
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Event = model('Event', eventSchema);
export default Event;
