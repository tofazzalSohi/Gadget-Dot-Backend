const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:ohqjqfpSgEbk2X44@cluster0.mnph2.mongodb.net/Items?retryWrites=true&w=majority";
let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get("/", (req, res) => {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("Items").collection("order");
      collection
        .find()
        .sort({ _id: -1 })
        .toArray((err, documents) => {
          // console.log('Succesfuly inserted',result)
          res.send(documents);
          client.close();
        });
    }
  });
});
router.get("/:id", (req, res) => {
  console.log(req.params);
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      client.connect((err) => {
        const collection = client.db("Items").collection("order");
        collection.find({ id: req.params.id }).toArray((err, documents) => {
          // console.log('Succesfuly inserted',result)
          res.send(documents);
          client.close();
        });
      });
    }
  });
});
module.exports = router;
