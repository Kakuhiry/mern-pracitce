const Message = require("../../models/Message");
const SaveMessageValidator = require("../Validator");

module.exports = function SaveMessage(data, res) {
  const { errors, isValid } = SaveMessageValidator(data);
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    const newMessage = new Message({
      sender: data.sender,
      reciever: data.reciever,
      message: data.message,
    });

    newMessage
    .save()
    .then((message) => res.json(message))
    .catch((err) => console.log(err))
  }
};
