const mutations = `
  register(
    email: String!
    password: String!
    firstname: String!
    lastname: String!
  ): User

  login(
    email: String!
    password: String!
  ): UserToken

  updateUser(
    firstname: String
    lastname: String
  ): ReturnMsg

  follow(userId: String!): ReturnMsg
  unFollow(userId: String!): ReturnMsg
`;

export default mutations;
