const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/contactform', {useNewUrlParser: true , useUnifiedTopology:true});

const port = 4500;
// app.use.bodyparser.json


// define mongoose schema
const contactschema = new mongoose.Schema({
    name: String,
    age: String,  
    city: String,
    achievements: String,
    gender: String
    
  });

  const conta = mongoose.model('conta' , contactschema);


 //Express SPECIFIC STUFF//


 app.use('/stat' , express.static('static'));
 app.use(express.urlencoded())
//   this helps to bring the data to the express
//  app.use(express.urlencoded())
 
 //set the template engine as pug.//
 
 //PUG SPECIFIC STUFF//
 app.set('view engine' , 'pug');
  //set the views DIRECTORY//
  
  app.set('views', path.join(__dirname , 'views'))
 

 //our pug demo endpoint//
 //END POINTS
 
 app.get('/' , (req,res)=>{
     
     
     res.status(200).render('index.pug');
 
 });
 app.get('/about' , (req,res)=>{
     
     
    res.status(200).render('about.pug');

});
app.get('/services' , (req,res)=>{
     
     
    res.status(200).render('services.pug');

});

 app.get('/contact' , (req,res)=>{
     
     
    res.status(200).render('contact.pug');

});
app.post('/contact' , (req,res)=>{
     
     var mydata =  new  conta(req.body);
     mydata.save().then(()=>{
         res.send("This item has been saved")
     }).catch(() => {
         res.status(200).send("item is not saved")
     });



})



//lisning on port
 app.listen(port , ()=>{
    console.log(`this application started successfull on port  hello ${port}`)
});
