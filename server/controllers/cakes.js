const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
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

    retrieve: ( req, res) => {
        Cake.find({}, (err, cakes) => {
            if (err){
                console.log("RETRIEVING FAILED", err);
                res.json(cakes);
            } else {
                console.log("RETRIEVING SUCCESS");
                res.json(cakes);
            }
        });
    },

    create: (req, res) => {
        var cake = new Cake({
            name: req.body.name,
            url: req.body.url,
        });
        cake.save( err => {
            if (err){
                console.log("CREATING FAILED!");
                for (var key in err.errors){
                    console.log(err.errors[key].message);
                    req.flash(key, err.errors[key].message);
                }
                res.json(cake);
            } else {
                console.log("CREATION SUCCESS!");
                res.json(cake);
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

    updateById: (req, res) => {
        Cake.findByIdAndUpdate(req.params.id,
            {$push: {comments: req.body} },
            (err, cake) => {
            if (err){
                console.log("UPDATE FAILED", err);
                res.json(cake);
            } else {
                res.json(cake);
            }
        });
    },

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