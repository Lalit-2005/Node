const http =require("http")
const fs=require("fs")
const PORT=process.env.PORT || 4000
const home=fs.readFileSync("./index.html","utf-8")
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        return res.end(home);
    }
    if(req.url==="/about")
    {
        return res.end("<h1>hello my home page</h1>");
    }
    if(req.url==="/contact")
    {
        return res.end("<h1>hello my contact page</h1>");
    }
    else{
        return res.end("<h1>404 this is error</h1>")
    }
})
server.listen(PORT,()=>{
    console.log(`server is running`)
})
