const cake = require("../controllers/cakes.js");
const comment = require("../controllers/comments.js");

module.exports = app => {
    app.get("/cakes", (req, res) => {
        cake.retrieve(req, res);
    });

    app.post("/cakes", (req, res) => {
        cake.create(req, res);
    });

    app.post("/comment", (req, res) => {
        comment.create(req, res);
    })

    // app.get("/tasks/:id", (req, res) => {
    //     task.retrieveById(req, res);
    // });

    app.put("/cakes/:id", (req, res) => {
        cake.updateById(req, res);
    });

    // app.delete("/tasks/:id", (req, res) => {
    //     task.deleteById(req, res);
    // });
}