const express = require("express")
const { createTask, getTasks, getSingleTasks, updateTask, deleteTask } = require("../controllers/taskController")

const router = express.Router() ;

// Task route

router.post('/',createTask)
router.get('/',getTasks)
router.get('/:id', getSingleTasks)
router.put('/:id' ,updateTask)
router.delete('/:id' , deleteTask)

module.exports = router ;