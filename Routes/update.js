const express = require("express");
const { ObjectID } = require("mongodb");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:ohqjqfpSgEbk2X44@cluster0.mnph2.mongodb.net/Items?retryWrites=true&w=majority";
let client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
router.patch("/product/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      // console.log(err);
    } else {
      const collection = client.db("Items").collection("Products");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: { price: req.body.price, discount: req.body.discount },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
router.patch("/order/:id", (req, res) => {
  // console.log(req.body);
  // console.log(req.params.id);
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      // console.log(err);
    } else {
      const collection = client.db("Items").collection("order");
      collection
        .updateOne(
          { _id: ObjectID(req.params.id) },
          {
            $set: { status: req.body.status },
            $currentDate: { lastModified: true },
          }
        )
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
module.exports = router;
