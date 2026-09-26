//Next
import { SetStateAction } from "react";

export type taskType = {
  id: string;
  name: string;
  done: boolean;
};

export interface getTaskProps {
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
}

export interface addNewTasProps {
  nameTask: string;
  setNameTask: React.Dispatch<SetStateAction<string>>;
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
}

export interface updateNameTaskProps {
  actualIdTask: string;
  actualNameTask: string;
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
}

export interface updateDeleteTaskProps {
  id: string;
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
}

export interface deleteDoneTaskProps {
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
}

export interface newTaskNameProps {
  actualNameTask: string;
  actualIdTask: string;
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
  setActualNameTask: React.Dispatch<SetStateAction<string>>;
  setActualIdTask: React.Dispatch<SetStateAction<string>>;
}

export interface TodoItemProps {
  id: string;
  name: string;
  completed: boolean;
  setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
  updateTask: ({
    id,
    setTaskList,
  }: {
    id: string;
    setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
  }) => Promise<void>;
  deleteTask: ({
    id,
    setTaskList,
  }: {
    id: string;
    setTaskList: React.Dispatch<SetStateAction<taskType[]>>;
  }) => Promise<void>;
  setActualIdTask: React.Dispatch<SetStateAction<string>>;
  setActualNameTask: React.Dispatch<SetStateAction<string>>;
}
