const types = `
  type User {
    id: ID
    avatar: String
    email: String!
    name: UserName
    password: String!
    following: [String!]
    followers: [String!]
  }

  type UserName {
    fullname: String
    lastname: String!
    firstname: String!
  }

  type UserToken {
    id: ID
    user: User
    token: String
  }

  type ReturnMsg {
    message: String!
    user: User!
  }
`;

export default types;
