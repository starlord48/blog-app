var MongoClient = require ('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Blog';
module.exports = {
      result : function(name,email,password){
          MongoClient.connect(url,function(err,db){
                db.collection('data').insertOne({
                        "name":name,
                        "email":email,
                        "password":password
                },function(err,result){
                        assert.equal(err,null);
                        console.log("Saved the user sign up details.");
                });
         });
    },
    validateSign: function(username,password,callback)
      {
      MongoClient.connect(url,function(err,db){
console.log(username,password);
      db.collection('data').findOne({email:username,password:password
      },function(err,result){
        if(result==null){
          console.log('false');
          callback(false)

        }
        else{
          console.log('true');
          callback(true)

        }
      });
    });
  }

}
