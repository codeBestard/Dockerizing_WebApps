"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.get("/", function (req, res, next) {
    res.send("<h1>Welcome to my page.</h1>");
});
app.listen(port, function () {
    console.log(`listening on port : ${port}`);
});
//# sourceMappingURL=index.js.map