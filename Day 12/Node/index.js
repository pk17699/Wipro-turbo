var http=require('http');

http.createServer((req, res)=>{
    if(req.url == '/user'){
        res.write(`<html><body><h1>Welcome new User</h1></body></html>`);
    }
    else{
        res.write(`<html><body><h1>Welcome to Node Js</h1></body></html>`);
    }
    res.end();
}).listen(3000)
