const http = require("http");
const PORT = 8000;
const app = require("./Routes/user");
const mongoDb = require("./DBconnection/mongoDB");

http.createServer(app).listen(PORT, () => {
  new mongoDb();
  console.log(`listening to ${PORT} port`);
});
