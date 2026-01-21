const http = require(node:`http`);;

const server = http.createServer((req, res) => {
    console.log('Request received');
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    res.end('Response from server');
});

server.listen(3000,`0.0.0.0`, () => {
    console.log('Server is listening on port 3000');
});