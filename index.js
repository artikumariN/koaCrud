let koa   =  require('koa');
let app   =  koa();
let route =  require('koa-route');
var mongoose = require('mongoose');
let views = require('co-views');
var parse = require('co-body');
let serve = require('koa-static');



var db        = require('./config/db'),
model     = require('./config/model');

//middleware
app.use(serve('./public'));
app.use(serve('./node_modules'));
app.use(serve('./bower_components'));

let render  = views(__dirname + '/public/views', { map: { html: 'swig' }});

//Initial view rendering
app.use(route.get('/',function *(next){
  this.body = yield render("index");
}));


app.use(route.get('/employee',function *(next){
  this.body = yield model.find({});
}));


app.use(route.post('/addNewRecord',function *(next){
  var records     = yield parse(this);
  var newEmployee = new model(records);
  var saveData    = yield newEmployee.save({});
   this.body    = saveData;
}));

app.use(route.get('/deleteRecord/:id',function *(id,next){
  this.body =yield model.findOneAndRemove({_id:id});
}));

app.use(route.get('/findEmployeeRecord/:id',function *(id,next){
  this.body =yield model.findById({_id:id});
}));

app.use(route.post('/updateRecord',function *(next){
  var records     = yield parse(this);
  var id          = records.id;
  this.body =yield model.findByIdAndUpdate(id,records);
}));

app.listen(8080,function(){
  console.log("App listening on port 8080");
})
