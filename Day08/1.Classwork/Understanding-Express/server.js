// 1.Import express
const express = require(`express`);

// 2.Create an express application
const app = express();

// 3.Run Express app
app.listen(`3000`,`localhost`,()=>{
    console.log(`Server started on port 3000`);
})