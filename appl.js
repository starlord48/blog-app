var express = require ("express");
var path = require ("path");
var bodyparser=require("body-parser");
var app = express();
var data=require('./src/app/main/data');
var post=require('./src/app/main/post');
var session=require('express-session');
app.use(session({secret:'my-app'}));
var sessions;
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,"/public")));

app.post('/results',(req,res) => {
    var name=req.body.name;
    var email = req.body.email;
    var password =req.body.password;


  if(name && email && password){
    data.result(name,email,password)
  }
  else{
    res.send('Failure');
  }
});
app.post('/result',(req,res) => {
    sessions=req.session;
    var user = req.body.email;
    var password =req.body.password;


data.validateSign(user,password,function(resl){
  if(resl){

    sessions.username=user;
    res.send('success');
  }
  else{
    res.send('failure');
  }

});
});
app.get('/index',(req,res)=>{
  if(sessions && sessions.username){
    res.sendFile(__dirname + '/public/index.html');

  }
  else{
    res.send('unauthorized');
  }
})
app.post('/blogResult',function(req,res){
  var title=req.body.subject;
  var blogbody=req.body.blogpost;
  post.blogresult(title,blogbody,function(result){
    res.send(result);
  });
})
app.post('/getPost',function(req,res){
  post.getPost(function(result){
    res.send(result);
    console.log("posted");

  })
})

app.listen(3001,() =>{
  console.log("started on port",3001);
})
