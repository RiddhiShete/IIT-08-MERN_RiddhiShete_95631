//Importing 
const express = require('express')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')


//Create express app
const app = express()

//Using Router Middleware
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)

//Run express app on port 3000
app.listen(3000, 'localhost', () => {
    console.log('Server started on port 3000')
})