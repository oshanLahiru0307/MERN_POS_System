require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const app = express()

const CustomerRoutes = require('./routes/CustomerRoutes')
const InventoryRoutes = require('./routes/InventoryRoutes')
const ShopRoutes = require('./routes/ShopRoutes')


//middlweare..
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

//routes
app.use('/api/customer', CustomerRoutes)
app.use('/api/inventory', InventoryRoutes)
app.use('/api/shop', ShopRoutes)

//connect mongodb..
mongoose.connect(process.env.MONGO_URI)
    .then( ()=> {

        //port listening..
        app.listen(process.env.PORT, ()=>{
        console.log("App is listening on Port",process.env.PORT)

        })

    })
    .catch((error)=> {
        console.log(error)
    })



