const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/products.routes.js')


const app = express();


//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }))


//routes
app.use("/api/products", productRoute)





app.get('/', (req, res) => {
    res.send("hello to u")
})

app.listen(5000, () => {
    console.log("its connected")
})












mongoose.connect('mongodb+srv://24f2007189:X84mP7iFmTiTlzj9@cluster0.qzndh.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("its connected")

    })
    .catch(() => {
        console.log("its not connected")
    })


