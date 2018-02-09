var mongoose = require("mongoose");

var BillSchema = new mongoose.Schema({
  tags: [String], //Array of strings
  congress: {type: Number, min: 113, max: 115}, //113, 114, or 115
  chamber: String, //The chamber (Senate or House)
  title: String, //The full name of the bill
  number: String, //The bill number (i.e. "H.R. 1033").
  url: String, //The URL to get the original XML file
  text: String, //The actual processed bill text
  type: String //What type of bill is it? (i.e. "hres" or "sjres")
});

var Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;
