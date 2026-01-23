const http = require(`node:http`);

const server = http.createServer((req, res) => {
    if (req.method == `GET`){
        if(req.url == `/demo`){
            console.log(`Method: ${req.method}`);
            res.end(`Hello World from Node.js Server`);
        }
    }
    else if (req.method == `POST`){
        if(req.url == `/demo`){
            console.log(`Method: ${req.method}`);
            res.end(`This is a demo POST request`);
        }

    }
    else if (req.method == `PUT`){
        if(req.url == `/demo`){
            console.log(`Method: ${req.method}`);
            res.end(`This is a demo PUT request`);
        }
    }
    else if (req.method == `DELETE`){
        if(req.url == `/demo`){
            console.log(`Method: ${req.method}`);
            res.end(`This is a demo DELETE request`);
        }
    }
});

server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});