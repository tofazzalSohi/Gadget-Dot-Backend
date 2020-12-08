const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:ohqjqfpSgEbk2X44@cluster0.mnph2.mongodb.net/Items?retryWrites=true&w=majority";
let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/product", (req, res) => {
  const data = req.body;
  console.log(data);
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("Items").collection("Products");
    collection.insertOne(data, (err, documents) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send("success");
      }
      client.close();
    });
  });
});
module.exports = router;

router.post("/order", (req, res) => {
  const data = req.body;
  console.log(data);
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db("Items").collection("order");
    collection.insertOne(data, (err, documents) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send("success");
      }
      client.close();
    });
  });
});
module.exports = router;
