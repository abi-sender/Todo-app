import Todo from '../Models/Todo.js';
// CREATE
export const createTodo= async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
    });

    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// READ // get
export const readTodo= async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// DELETE
export const deleteTodo= async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo Deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// UPDATE
export const updateTodo= async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
      },
      {
      returnDocument: "after",

      }
    );

    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error.message });
  }
};