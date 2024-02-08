const express=require("express")
const patientModel = require("../models/patientModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientModel(data)
    let result=await patient.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await patientModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await patientModel.find(input)
    res.json(data)
})


module.exports=router