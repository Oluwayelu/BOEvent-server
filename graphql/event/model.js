import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
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
    price: {
      type: Number,
      required: true,
    },
    time: {
      endDate: { type: Date },
      endTime: { type: String, required: true },
      startTime: { type: String, required: true },
      startDate: { type: Date, required: true },
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
