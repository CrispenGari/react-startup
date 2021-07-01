import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Todos } from "../../db";
import { TodoTypeWithUsername } from "../types";
const RootMutationType = new GraphQLObjectType({
  name: "RootMutation",
  description: "A root mutation for the todo application.",
  fields: () => ({
    addTodo: {
      type: TodoTypeWithUsername,
      args: {
        title: {
          type: GraphQLNonNull(GraphQLString),
        },
        completed: {
          type: GraphQLNonNull(GraphQLBoolean),
        },
        username: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        const todo = new Todos({
          username: args.username,
          todo: {
            completed: args.completed,
            title: args.title,
          },
        });
        return await todo.save();
      },
    },
    deleteTodo: {
      type: TodoTypeWithUsername,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        return await Todos.findByIdAndDelete(args.id);
      },
    },
    updateTodo: {
      type: TodoTypeWithUsername,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLString),
        },
        completed: {
          type: GraphQLNonNull(GraphQLBoolean),
        },
        title: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (parent, args) => {
        await Todos.findByIdAndUpdate(
          { _id: args.id },
          {
            todo: {
              title: args.title,
              completed: args.completed,
            },
          }
        );
        return await Todos.findById(args.id);
      },
    },
  }),
});

export default RootMutationType;
