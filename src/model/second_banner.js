const mongoose = require("mongoose")
const Second_banner = mongoose.Schema({
    title:String,
    subtitle:String,
    imageurl:String,
    linkconnection:String
})
module.exports=mongoose.model("second_banner",Second_banner)

 
