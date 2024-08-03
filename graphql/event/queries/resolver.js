import Event from '../model.js';

const queries = {
  events: async () => {
    const events = await Event.find({}).sort({ createdAt: '-1' });
    return events;
  },

  event: async (_, { url }) => {
    const event = await Event.findOne({ url }).populate('organizer');

    if (!event) {
      throw new Error('Invalid event id');
    }

    return event;
  },

  myEvents: async (_, __, { req, authUser }) => {
    const user = await authUser(req);

    if (!user) {
      throw new Error('Not authenticated');
    }

    const events = await Event.find({ organizer: user._id }).sort({ createdAt: '-1' });

    return events;
  },
};

export default queries;
