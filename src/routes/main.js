const express = require('express')
const { model } = require('mongoose')

const Detail = require("../model/Detail")
const Service = require('../model/services')
const Slider = require('../model/slider')
const Contact = require("../model/contact")
const Banner= require("../model/banner")
const Second_banner = require("../model/second_banner")

const routes = express.Router()
// this is home 
routes.get("/", async(req,res)=>
{
   const detail= await Detail.findOne({"_id":"63846745eafc8254f0f5067d"})
   const slides = await Slider.find()
   const services = await Service.find()
   const banner = await Banner.find()
   const second_banner = await Second_banner.find()
//    console.log(slides)
    res.render("index",{
        detail:detail,
         slides:slides,
         services:services,
         banner:banner,
         second_banner:second_banner

    });

});

// this is a gallary part
routes.get("/gallery",async(req,res)=>
{
    const detail= await Detail.findOne({"_id":"63846745eafc8254f0f5067d"});
    const slides = await Slider.find();
    res.render("gallery",{
        detail:detail,
        slides:slides
       
    })
}) 


// process contact form 
routes.post("/process-contact-form",async(req,res)=>
{
    console.log("form is summited")
    console.log(req.body)
    try
    {
 const data = await Contact.create(req.body)
 console.log(data)
 res.redirect("/")
    }
    catch(e)
    {
   console.log(e)
   console.redirect("/")
    }
})
module.exports = routes