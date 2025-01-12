require('dotenv').config()

const express = require("express")
const CustomerRoutes = require('./routes/CustomerRoutes')

const app = express()

//middlweare..
app.use(express.json)

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

//routes
app.use('/api/customer', CustomerRoutes)

//port listening..
app.listen(process.env.PORT, ()=>{
    console.log("App is listening on Port",process.env.PORT)
})