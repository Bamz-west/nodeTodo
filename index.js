const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World, Welcome to wejapa internship!');
    } else if (req.url === '/' && req.method === 'POST') {
        let data = [];
        req.on("data", (chunk) => {
            data.push(chunk);
        });
        console.log(data);
        req.on("end", () => {
            const name = JSON.parse(data).name;
            res.end(`Hello ${name}, Welcome to WeJapa Internship!`);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
    }
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});