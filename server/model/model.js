
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model('userdb',schema);   //create a collection "userdb" and pass the schema model.

module.exports = Userdb
