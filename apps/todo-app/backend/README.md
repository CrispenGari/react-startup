### Backend

This backend server handles all graphQL queries and mutations as well as REST.

### What we used

- express
- graphql
- mongodb
- express-graphql
- typescript
- bcrypt.js
- etc

### REST routes.

These routes have a a base url http://localhost:3001

### Creating a user

```
/user/create
```

### Finding a user

```
/user/login
```

### Adding (Creating) a todo

```
/todo/create
```

### Deleting a todo

```
/todo/delete/:id
```

### Finding todos

```
/todos/:username
```

### Updating a todo

```
/todo/update
```

### GraphQL Routes

For more into code visit the files. The graphql `route` for both `mutations` and queries is `/graphql` with a base url http://localhost:3001

### GraphQL Query

We are going to have one `RootQueryType` that returns all todos of a specific user. The cod that does that is as follows found in the `src/graphql/queries/index.ts` file.

```ts
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
```

### GraphQL Mutations

Mutation means changing data, So we are going to make mutations on updating the todos, deleting todos as well as adding a todo. The code will be found in the `src/graphql/mutations/index.ts` file.

```ts
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
```

For user authentication we are going to use REST. Which means we are done with our simple backend.
