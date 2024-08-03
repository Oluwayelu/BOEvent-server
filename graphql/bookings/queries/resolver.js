// import Event from '@/graphql/event/model.js';
import Booking from '../model.js';

const queries = {
  bookings: async (_, __, { req, authUser }) => {
    const user = await authUser(req);

    if (!user) {
      throw new Error('Not authenticated');
    }

    const bookings = await Booking.find({ user: user._id }).populate('event').sort({ createdAt: '-1' });
    return bookings;
  },

  booking: async (_, { id }) => {
    const booking = await Booking.findById(id).populate('event');

    if (!booking) {
      throw new Error('Invalid booking id');
    }

    return booking;
  },

  orders: async (_, __, { req, authUser }) => {
    const user = await authUser(req);

    if (!user) {
      throw new Error('Not authenticated');
    }

    // const myEvents = await Event.find({ organizer: user._id });

    const booking = await Booking.find({ user: user._id }).populate('event');
    console.log(booking);
    if (!booking) {
      throw new Error('Invalid booking id');
    }

    return booking;
  },
};

export default queries;
