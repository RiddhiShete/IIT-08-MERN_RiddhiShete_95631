// 1.Import express
const express = require(`express`);

// 2.Create an express application
const app = express();

// Routes

//1. Get all users
app.get(`/users`,(req,res)=>{
    console.log(`Method: ${req.method}`);
    console.log("Hello from Get all users route");
    res.send(`Get all users`);
});

// 2. Users Profile
app.get("/users/profile",(req,res)=>{
    console.log(`Method: ${req.method}`);
    res.send(`User Profile`);
});

//3. Users signup
app.post("/users/signup",(req,res)=>{
    console.log(`Method: ${req.method}`);
    res.send(`User Signup`);
});     

//4. Users signin
app.post("/users/signin",(req,res)=>{
    console.log(`Method: ${req.method}`);
    res.send(`User successfully Signin`);
});

//5. Update users
app.put("/users", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users Updated`);
});

//6. Delete users
app.delete("/users", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Users deleted`);
});

/*=====================
    Products
=======================*/

//1. Get product
app.get("/products", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Get all products`);
});

// 2. Add product
app.post("/products", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product added`);
});

//3. Update product
app.put("/products", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product updated`);
});

//4. Delete Product
app.delete("/products", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Product deleted`);
});

/*=====================
    Orders
=======================*/

//1. Get order
app.get("/orders", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`Get all order`);
});

// 2. Add order
app.post("/orders", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order added`);
});

//3. Update order
app.put("/orders", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order updated`);
});

//4. Delete order
app.delete("/orders", (req, res) => {
  console.log(`Method : ${req.method}`);
  res.send(`order deleted`);
});


// 3.Run Express app
app.listen(`3000`,`localhost`,()=>{
    console.log(`Server started on port 3000`);
})