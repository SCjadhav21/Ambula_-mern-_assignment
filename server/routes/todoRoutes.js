const express = require("express");

const { TodoModel } = require("../models/todo.model");

const TodoRoutes = express.Router();

// get all todos
TodoRoutes.get("/", async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).send(todos);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// get number of completed todos
TodoRoutes.get("/completed", async (req, res) => {
  try {
    const todos = await TodoModel.find({ iscompleted: true });
    let completedTodo = todos.length;
    res.send(200, completedTodo);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// create a new todo
TodoRoutes.post("/create", async (req, res) => {
  let todo = req.body;
  try {
    const newtodo = await new TodoModel(todo);
    newtodo.save();
    res
      .status(201)
      .send({ massage: "created todo", alert: "todo added successfully" });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// change status of the todo
TodoRoutes.patch("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const oldtodo = await TodoModel.findOne({ _id: id });

    const status = !oldtodo.iscompleted;

    await TodoModel.findOneAndUpdate({ _id: id }, { iscompleted: status });

    res
      .status(200)
      .send({ massage: "updated", alert: "Status updated successfully" });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// delete the todo
TodoRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await TodoModel.findOneAndDelete({ _id: id });
    res
      .status(200)
      .send({ massage: "deleted", alert: "todo deleted successfully" });
  } catch (e) {
    res.status(500).send(e.message);
  }
});
module.exports = { TodoRoutes };
