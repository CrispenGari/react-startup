import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { TodoTypeWithUsername } from "../types";
import { Todos } from "../../db";
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the root query type for users and todos.",
  fields: {
    todos: {
      description: "All todos of the user.",
      type: GraphQLList(TodoTypeWithUsername),
      args: {
        username: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        return await Todos.find({ username: args.username });
      },
    },
  },
});

export default RootQueryType;
