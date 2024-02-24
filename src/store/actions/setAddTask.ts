import { TSet, TState } from './../types';
import { ITask } from 'types/task';
import { addToStorage } from 'utils/storage/addToStorage';

/**
 * Adds a task to the state and updates the storage.
 *
 * @param set - The function to update the state.
 * @param task - The task to be added.
 * @returns The updated state with the new task added.
 */

export default (set: TSet) => (task: ITask) =>
  set((state: TState) => {
    const newTasks: ITask[] = [...state.tasks, task];
    addToStorage(newTasks);
    return { tasks: newTasks };
  });
