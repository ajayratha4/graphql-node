const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const typeDefs = require("./schema/index");
const resolvers = require("./resolvers/index");

const startExpress = async () => {
  const app = express();

  app.use(cors());
  app.use(json());

  // app.get("/", (req, res) => {
  //   res.send("Express Server");
  // });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
};

startExpress();
