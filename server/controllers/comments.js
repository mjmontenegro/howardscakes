const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
var moment = require("moment"); // formatting dates in ejs
var bcrypt = require("bcrypt");

module.exports = {
    // index: (req, res) => {
    //     Task.find({}, (err, task) => {
    //         if (err){
    //             console.log("FIND FAILED!", err);
    //             res.json(task);
    //         } else {
    //             console.log("FIND SUCCESS");
    //             res.json(task);
    //         }
    //     })
    // },

    // retrieve: ( req, res) => {
    //     console.log("tasks.js");
    //     Task.find({}, (err, tasks) => {
    //         if (err){
    //             console.log("RETRIEVING FAILED", err);
    //             res.json(tasks);
    //         } else {
    //             console.log("RETRIEVING SUCCESS");
    //             res.json(tasks);
    //         }
    //     });
    // },

    create: (req, res) => {
        var comment = new Comment({
            rating: req.body.rating,
            cmt: req.body.comment,
        });
        comment.save( err => {
            if (err){
                console.log("CREATING FAILED!");
                for (var key in err.errors){
                    console.log(err.errors[key].message);
                    req.flash(key, err.errors[key].message);
                }
                res.json(comment);
            } else {
                console.log("CREATION SUCCESS!");
                res.json(comment);
            }
        });
    },

    // retrieveById: (req, res) => {
    //     Task.findById(
    //         req.params.id, 
    //         (err, task) => {
    //         if (err){
    //             console.log("RETRIEVALE BY ID FAILED", err);
    //             res.json(task);
    //         } else {
    //             res.json(task);
    //         }
    //     });
    // },

    // updateById: (req, res) => {
    //     Task.findByIdAndUpdate(req.params.id,
    //         {title: req.body.title, description: req.body.description},
    //         (err, task) => {
    //         if (err){
    //             console.log("UPDATE FAILED", err);
    //             res.json(task);
    //         } else {
    //             res.json(task);
    //         }
    //     });
    // },

    // deleteById: (req, res) => {
    //     Task.findByIdAndDelete(req.params.id, (err, task) => {
    //         if (err){
    //             console.log("DELETING FAILED", err);
    //             res.json(task);
    //         } else {
    //             res.json(task);
    //         }
    //     });
    // },
}