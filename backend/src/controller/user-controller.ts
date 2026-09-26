import { type Request, type Response, Router } from "express";
import { prisma } from "../db.js";

export const task = async (request: Request, response: Response) => {
  try {
    const actualsTasks = await prisma.task.findMany();

    return response.status(200).json(actualsTasks);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const newTask = async (request: Request, response: Response) => {
  try {
    const { nameTask } = request.body;

    if (!nameTask) {
      return response
        .status(404)
        .json({ message: "Obrigatório o nome da terafa" });
    }

    const createNewTask = await prisma.task.create({
      data: {
        name: nameTask,
      },
    });

    return response.status(200).json(createNewTask);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const updateDoneTask = async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const actualTask = await prisma.task.findUnique({
      where: { id: id },
    });

    if (!actualTask) {
      return response.status(404).json({ message: "Tarefa não encontrada" });
    }

    const updateActualTask = await prisma.task.update({
      where: { id },
      data: { done: !actualTask.done },
    });

    return response.status(200).json(actualTask);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const updateNameTask = async (request: Request, response: Response) => {
  try {
    const { actualIdTask, actualNameTask } = request.body;
    const newNameTask = await prisma.task.update({
      where: { id: actualIdTask },
      data: { name: actualNameTask },
    });

    return response.status(200).json(newNameTask);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const deleteTask = async (request: Request, response: Response) => {
  try {
    const { id } = request.body;
    const deletedTask = await prisma.task.delete({ where: { id } });

    return response.status(200).json(deletedTask);
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const deleteDoneTasks = async (request: Request, response: Response) => {
  try {
    const doneTasks = await prisma.task.deleteMany({ where: { done: true } });

    return response.status(200).json(doneTasks);
  } catch (error) {
    return response.status(500).json(error);
  }
};
