import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";

export const TodoTypeWithUsername = new GraphQLObjectType({
  name: "TodoTypeWithUsername",
  description:
    "This is a todo type that contains the username of the publisher.",
  fields: () => ({
    username: {
      type: GraphQLNonNull(GraphQLString),
    },
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
    todo: {
      type: TodoType,
    },
  }),
});
const TodoType = new GraphQLObjectType({
  name: "TodoType",
  description: "This is the object type.",
  fields: () => ({
    completed: { type: GraphQLNonNull(GraphQLBoolean) },
    _id: {
      type: GraphQLNonNull(GraphQLString),
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

/*

 {
        "_id": "60dce2d4b94a281ffc15d57b",
        "username": "crispen",
        "todo": {
            "completed": false,
            "_id": "60dce2d4b94a281ffc15d57c",
            "title": "Cooking from monday to tuesday."
        },
        "__v": 0
    }
]
*/
