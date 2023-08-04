import Event from '../model.js';

const mutations = {
  createEvent: async (_, { eventInput }, { req, authUser }) => {
    try {
      const user = await authUser(req);

      if (!user) {
        throw new Error('Not authenticated');
      }

      const newEvent = await Event({
        ...eventInput,
        organizer: user.id,
      });

      const event = await newEvent.save();

      return {
        message: 'Event created successfully',
        event,
      };
    } catch (err) {
      throw new Error('An error occured');
    }
  },
};

export default mutations;
