import { ITask } from 'types/task';
export type TSet = (arg0: (state: TState) => { tasks: ITask[] }) => void;

export type TState = {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  editTask: (taskId: string, updatedTask: ITask) => void;
  deleteTask: (taskId: string) => void;
};
