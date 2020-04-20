const express = require("express");
const server = express();

server.use(express.json());

server.use("/api", require("./server"));

server.listen(5000, () => {
    console.log("Listening on port 5000");
})