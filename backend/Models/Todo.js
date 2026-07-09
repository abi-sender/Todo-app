import mongoose from "mongoose";
// Schema
const todoSchema = new mongoose.Schema({
  title: String,
});
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;