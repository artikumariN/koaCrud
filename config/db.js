var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/koaTrialDb');

module.exports=connection;
