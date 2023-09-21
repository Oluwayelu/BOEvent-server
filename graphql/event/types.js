const types = `
  type Event {
    id: ID!
    title: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenue!
    price: Float!
    time: EventTime!
  }

  type EventOrganizer {
    id: ID!
    title: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenue!
    price: Float!
    time: EventTime!
    organizer: User
  }


  type EventVenue {
    type: String!
    location: String!
  }

  type EventTime {
    endDate: String
    endTime: String!
    startTime: String!
    startDate: String!
  }

  input EventInput {
    title: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenueInput!
    price: Float!
    time: EventTimeInput!
  }

  input EventTimeInput {
    endDate: String
    endTime: String!
    startTime: String!
    startDate: String!
  }

  input EventVenueInput {
    type: String!
    location: String!
  }

  type EventReturnMsg {
    message: String!
    event: Event!
  }
`;

export default types;
