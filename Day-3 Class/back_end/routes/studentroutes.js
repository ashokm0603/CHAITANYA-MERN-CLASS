const StudentController=require("../controller/StudentController");
const express = require('express')
const router=express.Router()

router.post("/addstudent",StudentController);


module.exports=router;


