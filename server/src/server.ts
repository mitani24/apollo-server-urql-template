import fs from "fs";
import path from "path";
import { ApolloServer, gql } from "apollo-server";
import TrackAPI from "./datasources/track-api";
import resolvers from "./resolvers";
import { ApolloServerExpressConfig } from "apollo-server-express";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../../graphql/schema.graphql"))
  .toString();

export const createServer = (
  context?: ApolloServerExpressConfig["context"]
) => {
  return new ApolloServer({
    typeDefs: gql`
      ${typeDefs}
    `,
    dataSources() {
      return { trackAPI: new TrackAPI() };
    },
    resolvers,
    context,
  });
};
