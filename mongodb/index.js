const mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sample").then(()=>{
    console.log("connection successful to Mondodb");
}).catch((err)=>{
    console.log(err)
})
const student = new mongoose.Schema({
    name:String,
    workout : Boolean,
        height: Number,
    })
   const Student = new mongoose.model("student",student);

const adder = async()=>{
    const ss= new Student({
        name:"Ruman",
        workout : true,
        height: 5
    })
 await ss.save()
}

adder();