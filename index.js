var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true , useUnifiedTopology:true});


var db = mongoose.connection;
db.on('error',console.error.bind(console,'connectione error:'));
db.once('open',function () {
    console.log("we are connected Bro");
})

var kittyschema = new mongoose.Schema({
    name:String

});
 kittyschema.methods.speak = function () {
     var greeting = this.name
     ? "meow name is " + this.name
     : "i dont have a name";
     console.log(greeting);
 }


var kitten = mongoose.model('harrykitty', kittyschema);

var harrykitty = new kitten({ name:'harrykitty'});

console.log(harrykitty.name);
// harrykitty.speak();
// harrykitty.save

harrykitty.save(function (err, harrykitty) {
    if (err) return console.error(err);
    // harrykitty.speak();
  });

  var harrykitty = new kitten({ name:'harrykitty'})
  var kitten = mongoose.model('harrykitty', kittyschema);
  Kitten.find({name:"harrykitty"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })