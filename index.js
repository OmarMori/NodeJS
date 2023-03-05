const mongoose = require("mongoose")
const express=require("express")
const app=express()
const catRoutes=require("./routes/category.routes")//?
const bookRoutes=require("./routes/book.routes")
const userRoutes=require("./routes/user.routes")
const { json } = require("express")
const cors=require("cors")

app.use(cors)
app.use(json())
app.use("/",catRoutes)
app.use("/",bookRoutes)
app.use("/",userRoutes)



require("dotenv").config()


    mongoose.connect(process.env.MONGO_URL).then(result=> 
        app.listen(process.env.PORT,hostname, ()=>{
            console.log("SERVER RUNNING")
        })
        )
        .catch(error=>console.log(error))
         
     
   


