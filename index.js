require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Medicine  = require("./models/medicine.js");
const app = express();
const PORT = process.env.PORT || 3000;


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connect at ",conn);
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

app.get("/",(req,res)=>{
    res.send({medicine:'Medicine'})
})

app.get("/add-medicine",async (req,res)=>{
    try {
        await Medicine.insertMany([
            {
                name:"Arnica Montana",
                quantity:{
                    sbl_30:30,
                    sbl_200:30,
                    sbl_1M:30,
                    sbl_Q:30,
                    wsi_Q:30,
                }
            },
            {
                name:"Rhus Tox",
                quantity:{
                    sbl_30:30,
                    sbl_200:30,
                    sbl_1M:30,
                    sbl_Q:30,
                    wsi_Q:30,
                }
            },
        ])
    } catch (error) {
        console.log("err",error);
    }
    res.send("Data added");
})

app.get("/medicine",async(req,res)=>{
    const medic = await Medicine.find();
    medic ? res.json(medic) : res.send("Wrong acces");
})

connectDB().then(()=>{
    app.listen(PORT,()=>console.log("Connected and listeing ",PORT));
})