//Icons
import { IconEdit, IconTrash } from "@tabler/icons-react";

//Types
import { TodoItemProps } from "@/utils/Types";

const TodoItem = ({
  id,
  name,
  completed = false,
  setTaskList,
  updateTask,
  deleteTask,
  setActualIdTask,
  setActualNameTask,
}: TodoItemProps) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-between border border-gray-200 h-10">
      <p
        className={`h-full w-2 ${completed ? "bg-green-300" : "bg-red-300"}`}
      ></p>
      <p
        className={`flex-1 ${completed ? "line-through opacity-50" : ""} cursor-pointer`}
        onClick={() => updateTask({ id, setTaskList })}
      >
        {name}
      </p>
      <div className="flex flex-row items-center gap-2 mx-2">
        <IconEdit
          stroke={2}
          size={16}
          className="cursor-pointer"
          onClick={() => {
            setActualNameTask(name);
            setActualIdTask(id);
          }}
        />
        <IconTrash
          stroke={2}
          size={16}
          className="cursor-pointer"
          onClick={() => deleteTask({ id, setTaskList })}
        />
      </div>
    </div>
  );
};

export default TodoItem;
