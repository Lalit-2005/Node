const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    const home = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.end(home);
    } else if (req.url === "/about") {
        res.end("<h1>hello my about page</h1>");
    } else if (req.url === "/contact") {
        res.end("<h1>hello my contact page</h1>");
    } else {
        res.end("<h1>404 this is error</h1>");
    }
};
