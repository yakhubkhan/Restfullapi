const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


router.post("/students", async(req,res) => {
        
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){res.status(400).send(e);}

})

    //  read the data by using GET

    router.get("/students", async (req, res) => {
try{
    const studentsData = await Student.find();
    res.send(studentsData);
}catch(e){
    res.send(e);
}
})

    //  GET the indivisual student data

    router.get("/students/:id", async (req, res) => {
        try{
            const _id = req.params.id;
            const studentData = await Student.findById(_id);

            if(!studentData){
                return res.status(404).send();
            }else{
                res.send(studentData);

            }
            
        }catch(e){
            res.send(e);
        }
    })

    // UPDATE the data


    router.patch("/students/:id", async (req, res) => {
        try{
            const _id = req.params.id;
            const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {  new:true });

             return res.send(updateStudents);
            
        }catch(e){
            res.status(400).send(e);
        }
    })

    // DELETE data

    router.delete("/students/:id", async (req, res) => {
        try{
            const _id = req.params.id;
            const deleteStudent = await Student.findByIdAndDelete(req.params.id);

            if(!daleteStudent){
                return res.status(400).send();
            }else{
                res.send(deleteStudent);
            }
            
        }catch(e){
            res.status(500).send(e);
        }
    })




module.exports = router;