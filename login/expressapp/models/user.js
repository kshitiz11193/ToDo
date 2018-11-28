var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//used to store the password in hashed format in mongo DB
var bcrypt = require('bcrypt');

//create the schema for mongo DB, each object will have following 4 properties in the DB
var schema = new Schema({
    email : {type:String, require:true},
    username: {type:String, require:true},
    password:{type:String, require:true},
    creation_dt:{type:Date, require:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
//will be used to check if the passowrd entered by the user matches the one in the DB
schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}
//export the User schema which will then be used in "users.js" file.
module.exports = mongoose.model('User',schema);