import { Router } from "express";
import {
  deleteDoneTasks,
  deleteTask,
  updateNameTask,
  newTask,
  task,
  updateDoneTask,
} from "./controller/task-controller.js";

export const router = Router();

//Rotas
router.get("/task", task);
router.post("/create-task", newTask);
router.put("/update-done-task", updateDoneTask);
router.put("/update-name-task", updateNameTask);
router.delete("/delete-task", deleteTask);
router.delete("/delete-done-task", deleteDoneTasks);
