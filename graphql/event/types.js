const types = `
  type Event {
    id: ID!
    title: String!
    url: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenue!
    category: String!
    time: EventTime!
    ticket: EventTicket!
  }

  type EventOrganizer {
    id: ID!
    title: String!
    url: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenue!
    category: String!
    time: EventTime!
    ticket: EventTicket!
    organizer: User
  }


  type EventVenue {
    type: String!
    location: String!
  }

  type EventTime {
    type: String!
    startDate: String!
    endDate: String
    endTime: String!
    startTime: String!
  }

  type EventTicket {
    type: String!
    stock: Float
    stockType: String!
    price: Float!
  }

  input EventInput {
    title: String!
    url: String!
    banner: [String!]
    summary: String!
    description: String!
    venue: EventVenueInput!
    category: String!
    time: EventTimeInput!
    ticket: EventTicketInput!
  }

  input EventTimeInput {
    type: String!
    endDate: String
    endTime: String!
    startTime: String!
    startDate: String!
  }

  input EventVenueInput {
    type: String!
    location: String!
  }

  input EventTicketInput {
    type: String!
    stock: Float
    stockType: String!
    price: Float!
  }

  type EventReturnMsg {
    message: String!
    event: Event!
  }
`;

export default types;
