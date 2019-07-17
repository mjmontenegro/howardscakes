var mongoose = require("mongoose");
var validate = require("mongoose-validator"); // mongoose validator via validate.js

var nameValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 50],
        message: "Name should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
]

var urlValidator = [
    validate({
        validator: "isURL",
        message: "Not a valid URL",
    })
]

const CakeSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        validator: nameValidator,
    },
    url: {
        required: [true, "URL is required"],
        type: String,
        validator: urlValidator,
    },
    comments: [],
}, { timestamps: true}); // automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"
    
mongoose.model("Cake", CakeSchema);