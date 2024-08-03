const types = `
  type Booking {
    id: ID!
    user: String!
    name: UserName!
    email: String!
    country: String!
    state: String!
    address: String!
    postal: String!
    totalPrice: Float!
    noOfTickets: Float!
  }

  type BookingEvent {
    id: ID!
    user: String!
    name: UserName!
    email: String!
    country: String!
    state: String!
    address: String!
    postal: String!
    totalPrice: Float!
    noOfTickets: Float!
    event: Event
  }

  type BookingReturnMsg {
    message: String!
    booking: Booking!
  }

  input BookingInput {
    event: String!
    firstname: String!
    lastname: String!
    email: String!
    country: String!
    state: String!
    address: String!
    postal: String!
    totalPrice: Float!
    noOfTickets: Float!
  }
`;

export default types;
