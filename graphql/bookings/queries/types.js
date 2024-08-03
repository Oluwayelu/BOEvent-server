const queries = `
  bookings: [BookingEvent]
  booking(id: String!): BookingEvent!
  orders: [BookingEvent]
`;

export default queries;
