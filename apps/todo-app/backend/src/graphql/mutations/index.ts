import { GraphQLObjectType } from "graphql";

const RootMutationType = new GraphQLObjectType({
  name: "RootMutation",
  description:
    "THIS IS A ROOT MUTATION TYPE FOR THE USERS AND TODO'S APPLICATION",
  fields: () => ({}),
});

export default RootMutationType;
