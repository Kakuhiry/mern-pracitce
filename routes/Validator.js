const Validator = require("validator");
const isEmpty = require("is-empty");


//Route: "/save" used in
module.exports = function ValidateMessage(data){
    let errors = {};
    data.sender = !isEmpty(data.sender) ? data.sender: "";
    data.reciever = !isEmpty(data.reciever) ? data.reciever: "";
    data.message = !isEmpty(data.message) ? data.message: "";

    if (Validator.isEmpty(data.sender)) {
        errors.sender = "Sender field is required"
    }
    if (Validator.isEmpty(data.reciever)) {
        errors.reciever = "Sender reciever is required"
    }
    if (Validator.isEmpty(data.message)) {
        errors.message = "Sender message is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};