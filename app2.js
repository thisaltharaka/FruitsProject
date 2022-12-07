const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty solid as a fruit"
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Thisal",
  age: 33
});

//fruit.save();
//person.markModified('person');
//person.save();

const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Pretty solid as a fruit"
});
