
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

const home = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        return res.end(home);
    }
    if (req.url === "/about") {
        return res.end("<h1>hello my home page</h1>");
    }
    if (req.url === "/contact") {
        return res.end("<h1>hello my contact page</h1>");
    } else {
        return res.end("<h1>404 this is error</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
