import Event from '../model.js';

const queries = {
  events: async () => {
    const events = await Event.find({});
    return events;
  },

  event: async (_, { id }) => {
    const event = await Event.findById(id);

    if (!event) {
      throw new Error('Invalid event id');
    }

    return event;
  },
};

export default queries;
