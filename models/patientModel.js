const mongoose=require("mongoose")
const patientSchema=new mongoose.Schema(
    {
        name:String,
        phone:String,
        address:String,
        symptom:String,
        stat:String
    }
)

module.exports=mongoose.model("patient",patientSchema)