//Types
import {
  addNewTasProps,
  deleteDoneTaskProps,
  getTaskProps,
  newTaskNameProps,
  updateDeleteTaskProps,
  updateNameTaskProps,
} from "@/utils/Types";

export const getTasks = async ({ setTaskList }: getTaskProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task`);
  const data = await response.json();

  setTaskList(data);
};

export const addNewTask = async ({
  nameTask,
  setNameTask,
  setTaskList,
}: addNewTasProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/create-task`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameTask }),
    },
  );

  const data = await response.json();
  console.log(data);

  setNameTask("");
  await getTasks({ setTaskList });
};

export const updateTask = async ({
  id,
  setTaskList,
}: updateDeleteTaskProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/update-done-task`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    },
  );

  const data = await response.json();
  console.log(data);

  await getTasks({ setTaskList });
};

export const updateNameTask = async ({
  actualIdTask,
  actualNameTask,
  setTaskList,
}: updateNameTaskProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/update-name-task`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ actualIdTask, actualNameTask }),
    },
  );

  const data = await response.json();
  console.log(data);

  await getTasks({ setTaskList });
};

export const deleteTask = async ({
  id,
  setTaskList,
}: updateDeleteTaskProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/delete-task`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    },
  );

  const data = await response.json();
  console.log(data);

  await getTasks({ setTaskList });
};

export const deleteDoneTask = async ({ setTaskList }: deleteDoneTaskProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/delete-done-task`,
    {
      method: "DELETE",
    },
  );

  const data = await response.json();
  console.log(data);

  await getTasks({ setTaskList });
};

export const newTaskName = ({
  actualNameTask,
  actualIdTask,
  setTaskList,
  setActualNameTask,
  setActualIdTask,
}: newTaskNameProps) => {
  if (actualNameTask === "") {
    alert("Nome inválido");
    setActualNameTask("");
    setActualIdTask("");
    return;
  }
  updateNameTask({ actualIdTask, actualNameTask, setTaskList });

  setActualNameTask("");
  setActualIdTask("");
};
