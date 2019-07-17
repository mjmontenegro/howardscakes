var mongoose = require("mongoose");
var validate = require("mongoose-validator"); // mongoose validator via validate.js

var cmtValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 50],
        message: "Comment should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
]

const CommentSchema = new mongoose.Schema({
    rating: {
        required: [true, "Rating is required"],
        type: Number,
    },
    cmt: {
        required: [true, "Comment is required"],
        type: String,
        validate: cmtValidator,
    },
}, { timestamps: true}); // automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"
    
mongoose.model("Comment", CommentSchema);