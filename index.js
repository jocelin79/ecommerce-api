const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const productRoute = require("./routes/product");
const sellersRoute = require("./routes/sellers");
const cors = require("cors")
const stripeRoute = require("./routes/stripe");

dotenv.config()

mongoose
  .connect('mongodb+srv://jocelin_01:D1d2d3d4@cluster0.jsit9.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB Connection Successfull'))
  .catch(err => {
    console.log(err)
  })

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use("/api/checkout", stripeRoute);
app.use("/api/sellers", sellersRoute);

app.listen(process.env.PORT || 80, () => {
  console.log('Backend server is running!')
})
