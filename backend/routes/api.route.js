const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient() 

router.get('/todos', async (req, res, next) => {
  try {
    const todos = await prisma.todo.findMany({})

    res.json(todos)
  } catch (error) {
    next(error)
  }
});

router.get('/todos/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const todo = await prisma.todo.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.json(todo)
  } catch (error) {
    next(error)
  }
});

router.post('/todos', async (req, res, next) => {
  try {
    const todo = await prisma.todo.create({
      data: req.body
    })
    res.json(todo)
  } catch (error) {
    next(error)
  }
});

router.delete('/todos/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const deletedToDo = await prisma.todo.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(deletedToDo)
  } catch (error) {
    next(error)
  }
});

router.patch('/todos/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const todo = await prisma.todo.update({
      where: {
        id:Number(id)
      }, 
      data: req.body
    })
    res.json(todo)
  } catch (error) {
    next(error)
  }
});
module.exports = router;
