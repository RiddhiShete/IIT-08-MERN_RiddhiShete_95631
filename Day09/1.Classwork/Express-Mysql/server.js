const express = require(`express`);
const studentRouter = require(`./routes/student`);

const app = express();

app.use(express.json());
app.use('/students', studentRouter);

app.listen(3000,`localhost`,()=>{
    console.log(`Server started on port 3000`);
})


    