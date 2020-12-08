//import file
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
//middleware
app.use(cors());
app.use(bodyParser.json());

//database connect
const uri = process.env.URI;
let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get router for all data
const getData = require("./Routes/get");
app.use("/product", getData);

//post order
const order = require("./Routes/order");
app.use("/order", order);

const post = require("./Routes/post");
app.use("/post", post);

//update
const update = require("./Routes/update");
app.use("/update", update);

//delete
const del = require("./Routes/delete");
app.use("/delete", del);

//port running
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
