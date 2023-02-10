 const express =require('express')
const router =express.Router()


const {getAllTasks, createTask, deletTask, updateTask,getTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deletTask)

module.exports =router
