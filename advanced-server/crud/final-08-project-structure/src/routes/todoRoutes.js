import express from 'express'

import {
    createTodo,
    deleteTodoById,
    getTodos,
    getTodoById,
    updateTodo
} from '../controllers/todoController.js'

const router = express.Router()

// router.get('/todos', getTodos)
// router.post('/todos', createTodo)
// router.patch('/todos', updateTodo)
router.route('/todos').get(getTodos).post(createTodo).patch(updateTodo)
router.get('/todos/:id', getTodoById)
router.delete('/todos/:id', deleteTodoById)
// router.route('/todos/:id').get(getTodoById).delete(deleteTodoById)

export default router