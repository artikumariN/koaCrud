var mongoose      = require('mongoose'),

    employeeData   =  mongoose.Schema({
    name      : String,
    email     : String,
    mobile    : Number,
    address    : String,
    designation : String,
});

var employee     =  mongoose.model("records", employeeData);

module.exports=employee;
