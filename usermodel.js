var mongoose=require('mongoose');


var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
module.exports = mongoose.model("User", nameSchema);
