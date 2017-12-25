var MongoClient = require('mongodb').MongoClient;
var assert =require('assert');
var url= 'mongodb://localhost:27017/Blog';

module.exports = {
      blogresult:function(subject,blogpost,callback){
        MongoClient.connect(url,function(err,db){
            db.collection('post').insertOne({

              "subject": subject,
              "blogpost":blogpost
            },function(err,result){
              assert.equal(err,null);
              console.log("saved the blog post details.");
              if(err ==null){
                callback(true)
              }
              else{
                callback(false)
              }
            });
        });
      },
      getPost:function(callback){
        MongoClient.connect(url,function(err,db){
          db.collection('post',function(err,collection){
            collection.find().toArray(function(err,list){
              callback(list);
            });
          });
        })
      }
}
