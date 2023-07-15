const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  todo: { type: String, required: true },
  dateofCreation: { type: Date, required: true, default: Date.now() },
  iscompleted: { type: Boolean, required: true, default: false },
});

const TodoModel = mongoose.model("Todo", todosSchema);

module.exports = { TodoModel };
