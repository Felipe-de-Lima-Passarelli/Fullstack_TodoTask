"use client";

//Next
import { useEffect, useState } from "react";

//Icons
import {
  IconPlus,
  IconList,
  IconLoader,
  IconCheck,
  IconListCheck,
  IconTrash,
  IconSum,
} from "@tabler/icons-react";

//Components
import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";

//Utils
import {
  getTasks,
  addNewTask,
  updateTask,
  deleteTask,
  deleteDoneTask,
  newTaskName,
} from "@/utils/Functions";

//Types
import { taskType } from "@/utils/Types";

export default function Home() {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [taskList, setTaskList] = useState<taskType[]>([]);
  const [nameTask, setNameTask] = useState<string>("");
  const [actualNameTask, setActualNameTask] = useState<string>("");
  const [actualIdTask, setActualIdTask] = useState<string>("");

  useEffect(() => {
    const loadTasks = async () => {
      await getTasks({ setTaskList });
    };

    loadTasks();
  }, []);

  return (
    <div className="w-full h-screen bg-[#F1F4F5] flex fles-row justify-center items-center relative">
      {actualIdTask.length !== 0 && (
        <div className="bg-white w-98 top-50 rounded-md absolute z-1 flex flex-col px-2 py-1 gap-1">
          <h2 className="text-sm font-semibold">Editar nome da Task</h2>
          <input
            type="text"
            placeholder="Task Name"
            className="border border-gray-500 rounded-md py-1 px-2 focus:outline-none"
            value={actualNameTask}
            onChange={(e) => setActualNameTask(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <button
              className="cursor-pointer border border-gray-500 rounded-md px-2"
              onClick={() => {
                setActualNameTask("");
                setActualIdTask("");
              }}
            >
              Sair
            </button>
            <button
              className="cursor-pointer border border-gray-500 rounded-md px-2"
              onClick={() =>
                newTaskName({
                  actualIdTask,
                  actualNameTask,
                  setActualIdTask,
                  setActualNameTask,
                  setTaskList,
                })
              }
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
      <div className="bg-white rounded-md shadow-[0_0_15px_rgba(0,0,0,0.25)] p-8">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Adicionar tarefa"
            className="border border-gray-500 px-2 rounded-md focus:outline-none"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
          />
          <span
            onClick={() => {
              alert("Task adicionada");
              addNewTask({ nameTask, setNameTask, setTaskList });
            }}
          >
            <Button icon={IconPlus} text="Adicionar" varient={false} />
          </span>
        </div>
        <hr className="border border-gray-200 opacity-80 mt-4 mb-3" />
        <div className="flex flex-row gap-4">
          <span onClick={() => setActiveOption(0)}>
            <Button
              icon={IconList}
              varient={activeOption === 0 ? false : true}
              size={10}
              text="Todos"
              textSize="10"
            />
          </span>
          <span onClick={() => setActiveOption(1)}>
            <Button
              icon={IconLoader}
              varient={activeOption === 1 ? false : true}
              size={10}
              text="Não finalizados"
              textSize="10"
            />
          </span>
          <span onClick={() => setActiveOption(2)}>
            <Button
              icon={IconCheck}
              varient={activeOption === 2 ? false : true}
              size={10}
              text="Concluídos"
              textSize="10"
            />
          </span>
        </div>
        <div className="flex flex-col mt-4">
          {(() => {
            switch (activeOption) {
              case 0:
                return taskList.length === 0 ? (
                  <p className="text-xs font-semibold">
                    Sem tarefas no momento
                  </p>
                ) : (
                  taskList.map((task) => (
                    <TodoItem
                      key={task.id}
                      id={task.id}
                      name={task.name}
                      completed={task.done}
                      setTaskList={setTaskList}
                      updateTask={updateTask}
                      deleteTask={deleteTask}
                      setActualIdTask={setActualIdTask}
                      setActualNameTask={setActualNameTask}
                    />
                  ))
                );

              case 1:
                return taskList.filter((task) => task.done === false).length ===
                  0 ? (
                  <p className="text-xs font-semibold">
                    Sem tarefas em andamento
                  </p>
                ) : (
                  taskList
                    .filter((task) => task.done === false)
                    .map((task) => (
                      <TodoItem
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        completed={task.done}
                        setTaskList={setTaskList}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        setActualIdTask={setActualIdTask}
                        setActualNameTask={setActualNameTask}
                      />
                    ))
                );

              default:
                return taskList.filter((task) => task.done === true).length ===
                  0 ? (
                  <p className="text-xs font-semibold">
                    Sem tarefas concluidas no momento
                  </p>
                ) : (
                  taskList
                    .filter((task) => task.done === true)
                    .map((task) => (
                      <TodoItem
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        completed={task.done}
                        setTaskList={setTaskList}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        setActualIdTask={setActualIdTask}
                        setActualNameTask={setActualNameTask}
                      />
                    ))
                );
            }
          })()}
          <div className="flex flex-row justify-between mt-2">
            <div className="flex flex-row items-center text-sm">
              <IconListCheck stroke={2} size={16} />
              <p>
                Tarefas concluidas
                <span className="font-semibold">
                  {
                    taskList
                      .filter((task) => task.done === true)
                      .map((task) => (
                        <TodoItem
                          key={task.id}
                          id={task.id}
                          name={task.name}
                          completed={task.done}
                          setTaskList={setTaskList}
                          updateTask={updateTask}
                          deleteTask={deleteTask}
                          setActualIdTask={setActualIdTask}
                          setActualNameTask={setActualNameTask}
                        />
                      )).length
                  }
                  /{taskList.length}
                </span>
              </p>
            </div>
            <span
              onClick={() => {
                if (taskList.some((item) => item.done)) {
                  alert("Tarefas concluidas limpadas");
                  deleteDoneTask({ setTaskList });
                } else {
                  alert("Sem tarefas concluidas no momento");
                }
              }}
            >
              <Button
                icon={IconTrash}
                varient={true}
                size={16}
                stroke={2}
                text="Limpar tarefas concluídas"
                textSize="8"
              />
            </span>
          </div>
          <div className="bg-[#F4F4F4] h-2">
            <div
              className={`h-full bg-[#187EFA]`}
              style={{
                width: `${(taskList.filter((task) => task.done === true).length / taskList.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex flex-row items-center gap-1 self-end mt-1">
            <IconSum stroke={2} size={14} />
            <p className="text-sm">{taskList.length} tarefas no total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
