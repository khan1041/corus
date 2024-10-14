
const mongoose=require('mongoose')
const { number } = require('zod')

//const shortid = require('shortid')
//const ens=require('dotenv').config()

const messagescema=new mongoose.Schema({

name:{
type:String,
required:true

},
email:{
   type:String,
   required:true
},
meassage:{
type:String,
required:true
}

 
},

)

const URL1=mongoose.model("contect",messagescema)

module.exports=URL1


















