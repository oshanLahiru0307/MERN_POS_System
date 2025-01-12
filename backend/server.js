require('dotenv').config()

const express = require("express")
const CustomerRoutes = require('./routes/CustomerRoutes')
const mongodb = require('mongoose')

const app = express()

//middlweare..
app.use(express.json)

app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

//routes
app.use('/api/customer', CustomerRoutes)

//connect mongodb..
mongodb.conncect(MONGO_URI)
.then( ()=> {

    //port listening..
    app.listen(process.env.PORT, ()=>{
    console.log("App is listening on Port",process.env.PORT)
})

})
.catch((error)=> {
    console.log(error)
})



