const Message = require("../../models/Message");

module.exports = function RetrieveMessage(data, res) {
  console.log("no");
  Message.find({})
    .then((message) => {
      res.send(message).json;
    })
    .catch((err) => res.send(err).json);
};
