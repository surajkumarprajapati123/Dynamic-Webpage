const mongoose = require("mongoose")
const banner = mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String,
    linkconnection:String
})
module.exports=mongoose.model("banner",banner)

 
