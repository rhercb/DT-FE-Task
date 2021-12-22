import jsonServer from "json-server";
import characters from "./db";

const server = jsonServer.create();
const router = jsonServer.router({ characters });
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(5555, () => {
  console.log("Server running at: http://localhost:5555/characters");
});