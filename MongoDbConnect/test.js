// const mongoose= require("mongoose");


// mongoose.set("strictQuery", false);
// mongoose.connect('mongodb://localhost:27017/test', function() { /* dummy function */ })
//     .then(() => {
//         console.log("Connection Successs")
//     })
//     .catch(err => { // mongoose connection error will be handled here
//         console.error('App starting error:', err);
        
//     });

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/Animals", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Taste Good"
});

fruit.save();