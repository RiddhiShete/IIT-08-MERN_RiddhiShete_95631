const express = require("express");
const usersRouter = require("./routes/users"); // adjust path if needed

const app = express();

// middleware to read JSON body
app.use(express.json());

// mount router
app.use("/users", usersRouter);

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
