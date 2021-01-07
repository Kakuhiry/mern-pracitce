const express = require("express");
const router = express.Router();
const SaveMessage = require("../routes/SaveMessage/SaveMessage")
const RetrieveMessage = require("../routes/RetrieveMessage/RetrieveMessage")
const Message = require("../models/Message");


router.post("/save", (req, res) => {
  return SaveMessage(req.body, res);
});

router.get("/retrieve/:sender", (req, res) => {
  const senderSt = req.params.sender
  Message.find({sender: senderSt})
    .then((message) => {
      res.send(message).json;
    })
    .catch((err) => res.send(err).json);
})

module.exports = router;
