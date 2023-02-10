
const Task = require('../models/Tasks')

const getAllTasks= async(req, res)=>{
    try{
        const task =await Task.find(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}


const createTask= async  (req, res)=>{

    try{
        const task =await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
  }
const getTask= async (req, res)=>{
    try{
        const {id:taskID} =req.params
        const task =await Task.findOne({_id : taskID})
        if(!task){
            return res.status(404).json({mes:`No task with: ${taskID}`})
        }
        res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
  }

const deletTask= async(req, res)=>{
    try{
        const {id:taskID}=req.params
        const task= await Task.findByIdAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({mes:`No task with: ${taskID}`})
        }
        res.status(200).json({task})
       }catch(error){
        res.status(500).json({msg:error})
       }
}



const updateTask= async(req, res)=>{
 try{
    const {id:taskID}=req.params
    const task= await Task.findOneAndUpdate({_id :taskID}, req.body , {new:true, runValidators:true})
    if(!task){
        return res.status(404).json({mes:`No task with: ${taskID}`})
    }
    res.status(200).json({task})
 }catch(error){

 }
}

module.exports ={
    getAllTasks,
    createTask, getTask,updateTask,deletTask
}