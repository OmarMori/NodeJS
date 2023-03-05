const mongoose=require("mongoose")
const userSchema=new mongoose.Schema( definition, {
     LName:{type:String,required:true},
     FName:{type:String,required:true},
     Email:{type:String,required:true},
     Password:{type:String,required:true},
     image:{type:String}

})

const   User=mongoose.model( name, "User,userSchema")
module.exports = User
