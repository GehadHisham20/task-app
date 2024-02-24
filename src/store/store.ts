import { create } from 'zustand';
import setAddTask from './actions/setAddTask';
import setEditTask from './actions/setEditTask';
import setDeleteTask from './actions/setDeleteTask';
import { getFromStorage } from 'utils/index';

export const useStore = create((set) => ({
  tasks: getFromStorage() ?? [],
  addTask: setAddTask(set),
  editTask: setEditTask(set),
  deleteTask: setDeleteTask(set),
}));
