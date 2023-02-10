const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({ name:{
    type:String,
    required:[true, 'must provid a name'],
    maxlength:[20, 'name can not be more than 20 ca'],
    trim:true
},

    
    
   completed:{
    type:Boolean,
    default:false
   } });

module.exports =mongoose.model('Task', taskSchema)