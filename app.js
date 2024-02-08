const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controller/patientRoute")
const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://sumayyasalam06:Sumayyasalam06@cluster0.r19czfd.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/patient",patientRouter)


app.listen(3004,()=>{
    console.log("server running")
})