const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');
const { Schema } = mongoose;

const fruitSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Why no name?"] //validation
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  }
);
const Fruit = mongoose.model('fruit', fruitSchema);

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Good taste"
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "Yellow in color"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 4,
  review: "Good friut"
});



//Poeple
const personSchema = new Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model('staff',personSchema);

const amy = new Person({
  name: "Joe",
  age: 24,
  favouriteFruit: pineapple
});


// Add data to the database
pineapple.save().then(() => {console.log('pineapple success'); amy.save().then(() => console.log('amy success'));});

//Amy.markModified();






//Insert single entry

//pineapple.save().then(() => console.log('done'));

// Insert Couple of  data

// Fruit.insertMany([apple,orange,banana,kiwi], function(error, docs) {
//   if(error){console.log("failed");}
//   else {console.log("Success");}
// });

// Retrieve data

// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   }else {
//     mongoose.connection.close();
//     fruits.forEach(function(fruits){
//       console.log(fruits.name);
//     });
//     //console.log(fruits);
//   }
// });

// Update One
// Fruit.updateOne(
//   {_id: "630f81cada1cbcc48d19024a"},
//   {name: "Peach"},
//   (err)=> { if(err){console.log(err);}
//   else{console.log("Sucessfully updated the document");}
//   });

// Delete One
  // Fruit.deleteOne(
  //   {name:"Peach"},
  //   (err)=>{
  //     if(err){console.log(err);}
  //     else{console.log("Document deleted succesfully.");}
  //   });

// Delete Many
  // Cat.deleteMany(
  //   {name: "Kitty"},
  //   (err)=>{
  //     if(err){console.log(err);}
  //     else{console.log("Sucessfully deleted All Entries");}
  // });
