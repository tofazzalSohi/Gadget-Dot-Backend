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
router.delete("/:id", (req, res) => {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      const collection = client.db("Items").collection("Products");
      collection
        .deleteOne({ _id: ObjectID(req.params.id) })
        .then(function (result) {
          res.send("success");
          client.close();
        });
    }
  });
});
module.exports = router;
