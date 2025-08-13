const mongoose = require("mongoose");

const {Schema} = mongoose ;

const TaskModel = new Schema(
    {
        title :{
            type : String ,
            required : [true , "Title field is required" ],
        },
        description : {
            type : String ,
            required : true,
            // enum : ['Active','Inactive','Pending'],default:"Active"
        }
    },
    {
        timestamps : true 
    }
);

module.exports = mongoose.model("Task", TaskModel);


//   name: { type: String, required: [true, 'Department name is required'], trim: true, unique: true },
//   status: { type: String, required: true, enum: ['Active', 'Inactive', 'Pending', 'Approved'], default: 'Active' }
