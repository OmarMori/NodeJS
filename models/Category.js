const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema( definition , {
    name: {type: String, required: true},
    description: {type: String, required: true},




})
const Category=mongoose.model(name ,"Category",categorySchema)
module.exports = Category