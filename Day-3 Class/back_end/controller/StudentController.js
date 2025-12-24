const StudentModel = require("../model/StudentModel");

const addStudent =async (req, res) => {
  const newStudent = new StudentModel({
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    course: req.body.course,
    gender: req.body.gender,
  });
  await  newStudent.save()

  if(newStudent){
    res.status(201).json({  newStudent , message:"Student Details Added Successfully"})
  }

};


module.exports=addStudent;
