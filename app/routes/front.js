const express = require('express');
const Todo = require('./../models/Todo');

const router = express.Router();

// Home page route (all todos)
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('todos', {
    tasks: Object.keys(todos).length > 0 ? todos : {},
  });
});

// POST - Submit Todo
router.post('/', (req, res) => {
  const newTask = new Todo({
    task: req.body.task,
  });

  newTask
    .save()
    .then((task) => res.redirect('/'))
    .catch((err) => console.log(err));
});

// DELETE - Delete single todo item
router.delete('/:id', async (req, res) => {
  const taskId = req.params.id;
  await Todo.findOneAndRemove({ _id: taskId });
  res.redirect('/');
});

module.exports = router;
