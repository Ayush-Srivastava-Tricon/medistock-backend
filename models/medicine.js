const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const medicineSchema = new Schema({
    name:{
        type:String,
        required:true,
    },

    sbl:{
        type:Object,
        required:true,
        power_Q:{
            type:String,
            required:true,
        },
        power_30:{
            type:String,
            required:true,
        },
        power_200:{
            type:String,
            required:true,
        },
        power_1M:{
            type:String,
            required:true,
        },
    },
    
    wsi:{
        type:Object,
        required:true,
        power_Q:{
            type:String,
            required:true,
        },
        power_30:{
            type:String,
            required:true,
        },
        power_200:{
            type:String,
            required:true,
        },
        power_1M:{
            type:String,
            required:true,
        },
    },


});

module.exports = mongoose.model('Medicine',medicineSchema);
