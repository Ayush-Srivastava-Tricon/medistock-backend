require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Medicine  = require("./models/medicine.js");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

app.get("/",(req,res)=>{
    res.send({medicine:'Medicine'})
})

app.post("/addMedicine",async (req,res)=>{
    try {
        console.log(req.body);
        const data = req.body.medicList;
        await Medicine.insertMany(data);
         res.send("Data added");
    } catch (error) {
        res.send("Error Caused")
        console.log("err",error);
    }
   
})

app.get("/getStockDetail",async(req,res)=>{
    const medic = await Medicine.find();
    medic ? res.json(medic) : res.send("Wrong acces");
})

app.put("/updateStock",async(req,res)=>{
    try {
        const data = req.body;
              await Medicine.findByIdAndUpdate(data._id,data);
    //    await data.forEach((e)=>{
    //     console.log(e);
    //     })
        res.send("Data updated")

    } catch (error) {
        console.log(error);
        res.send("Data Erorr")
    }
})

connectDB().then(()=>{
    app.listen(PORT,()=>console.log("Connected and listeing ",PORT));
})