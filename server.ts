import jsonServer from "json-server";
import contacts from "./db";

const server = jsonServer.create();
const router = jsonServer.router({ contacts });
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(3000, () => {
  console.log("JSOn Server is running");
});