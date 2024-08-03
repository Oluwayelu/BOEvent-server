import Event from '../model.js';

const mutations = {
  createEvent: async (_, { eventInput }, { req, authUser }) => {
    const user = await authUser(req);

    if (!user) {
      throw new Error('Not authenticated');
    }

    const urlExist = await Event.findOne({ url: eventInput.url });
    if (urlExist) {
      throw new Error('Custom url already exists');
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
  },
};

export default mutations;
