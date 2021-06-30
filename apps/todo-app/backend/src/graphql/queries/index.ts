import { GraphQLObjectType, GraphQLString } from "graphql";

const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the root query type for users and todos.",
  fields: {
    message: {
      type: GraphQLString,
      resolve: () => "Hello, World.",
    },
  },
});

export default RootQueryType;
