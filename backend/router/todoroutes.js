import e, { Router } from "express";

import { createTodo,updateTodo,deleteTodo,readTodo } from "../controllers/todocontroller.js";

const router=e.Router();

router.post("/to",createTodo);

router.get("/todos",readTodo);

router.put("/todos/:id",updateTodo);

router.delete("/todos/:id",deleteTodo);

export default router;
