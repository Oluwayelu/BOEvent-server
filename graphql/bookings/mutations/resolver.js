import Booking from '../model.js';
import { Event } from '../../event/index.js';

const mutations = {
  createBooking: async (_, { bookingInput }, { req, authUser }) => {
    const eventExist = await Event.findById(bookingInput.event);

    if (!eventExist) {
      throw new Error('Event does not exist');
    }

    const user = await authUser(req);

    const newBooking = await Booking({
      ...bookingInput,
      name: {
        firstname: bookingInput.firstname,
        lastname: bookingInput.lastname,
        fullname: `${bookingInput.firstname} ${bookingInput.lastname}`,
      },
      user: user && user.id,
    });

    const booking = await newBooking.save();

    return {
      message: 'Booking created successfully',
      booking,
    };
  },
};

export default mutations;
