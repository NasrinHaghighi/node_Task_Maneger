const mongoose=require('mongoose')

const taskSchema = new mongoose.Schema({ name: 'string', completed: 'boolean' });

module.exports =mongoose.model('Task', taskSchema)