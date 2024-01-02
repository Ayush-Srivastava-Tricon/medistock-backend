const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const medicineSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:
    {
        sbl_30:{
            type:Number,
            required:true
        },
        sbl_200:{
            type:Number,
            required:true
        },
        sbl_Q:{
            type:Number,
            required:true
        },
        sbl_1M:{
            type:Number,
            required:true
        },
        wsi_Q:{
            type:Number,
            required:true
        },
    }
    
});

module.exports = mongoose.model('Medicine',medicineSchema);