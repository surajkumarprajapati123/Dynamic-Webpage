
const { request, response } = require("express");
const express = require("express")
const bodyParser = require("body-parser")
const hbs = require('hbs')
const app = express();
const routes = require('./routes/main')
const mongoose = require('mongoose')
const Detail = require('./model/Detail')
const Slider = require("./model/slider")
const Service = require("./model/services")
const Banner = require("./model/banner")
const Second_banner = require("./model/second_banner")



// stayle
app.use(bodyParser.urlencoded({
    extended:true

}))
app.use('/static',express.static("public"))
app.use('',routes)



//(template engi) important
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

app.get("/",(req,res)=>
{
    res.send("this is server id running ow thi is ssnagniarg dvknd")
})

// connection of the mongodb

mongoose.connect("mongodb://localhost/website_tut",()=>
{
     console.log("database is connected")
    //  Second_banner.create([
        
    //                 {
    //                     title:"Thie is second banner ",
    //                     subtitle:"lorem40 kjngf kjdf gkjdng sdkgn",
    //                     imageurl:"/static/image/svg3.webp",
    //                     linkconnection:"https://www.youtube.com/watch?v=7ilWglEQ4H0&ab_channel=LatestBhajan"
    //                 }
                
    //  ])

    //  Banner.create([
    //     {
    //         title:"incrase the mind ,learn more knowladge",
    //         subtitle:"lorem40 kjngf kjdf gkjdng sdkgn",
    //         imageurl:"/static/image/svg.webp",
    //         linkconnection:"https://www.youtube.com/watch?v=7ilWglEQ4H0&ab_channel=LatestBhajan"
    //     }
    //  ])

    //  Service.create([
    //     {
    //         icon:"fas fa-newspaper services-icon",
    //         title:"Proveded best Cources",
    //         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ",
    //         linktext:"hi,google",
    //         link:"https://www.google.com/search?q=google&source=lmns&bih=754&biw=1536&hl=en&sa=X&ved=2ahUKEwjbhKuxlNL7AhWJyqACHbNWCzAQ_AUoAHoECAEQAA"        
    //     },
    //     {
    //         icon:"fas fa-newspaper services-icon",
    //         title:"Proveded best Cources",
    //         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ",
    //         linktext:"hi,google",
    //         link:"https://www.google.com/search?q=google&source=lmns&bih=754&biw=1536&hl=en&sa=X&ved=2ahUKEwjbhKuxlNL7AhWJyqACHbNWCzAQ_AUoAHoECAEQAA"  
    //     },
    //     {
    //         icon:"fas fa-newspaper services-icon",
    //         title:"Proveded best Cources",
    //         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ",
    //         linktext:"You tube",
    //         link:"https://www.youtube.com/tseries"  
    //     }

    //  ])

    //    Slider.create([
    //     {
    //         title:"learn java in my plate from",
    //         subtitle:"java is most popular language ",
    //         imageurl:"/static/image/s2.jpg"
    //     },
    //     {
    //         title:"thise is slider is 2",
    //         subtitle:"jafndkfa adgaewoadvn ksdjgilwn m,mnvao ihaoianguage ",
    //         imageurl:"/static/image/s7.jpg"
    //     },
    //     {
    //         title:"thise is slider is 3",
    //         subtitle:"java is most popular language ",
    //         imageurl:"/static/image/s5.jpg"
    //     },

    //    ])





    //  Detail.create({
    //     brandName:"suraj",
    //     brandIconurl:"https://yt3.ggpht.com/V7iKN6DsTzSe0stsFOH_1j1wz1IUml3TOAOQiz9O0dh5hzhsBbzYsc6mAIkC_KffKaoMhTbX_Cs=s176-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             label:"home",
    //             url:"/",
    //         },
    //         {
    //             label:"services",
    //             url:"/services"
    //         },
    //         {
    //             label:"About",
    //             url:"/About"
    //         },
    //         {
    //             label:"contact_us",
    //             url:"/contact_us"
    //         },
    //         {
    //             label:"gallery",
    //             url:"/gallery"
    //         },

    //     ]
    //  })
});



app.listen(4000,function()
{
    console.log("welocmde ot my server")
})