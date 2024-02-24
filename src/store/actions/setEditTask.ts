import { TSet, TState } from './../types';
import { ITask } from 'types/task';
import { addToStorage } from 'utils/storage/addToStorage';

/**
 * Updates a task in the state and storage.
 *
 * @param set - A function to update the state.
 * @param id - The ID of the task to be updated.
 * @param task - The updated task object.
 * @returns An object containing the updated tasks.
 */
export default (set: TSet): object =>
  (id: string, task: ITask) =>
    set((state: TState) => {
      const tasks = state.tasks.map((one: ITask) => {
        if (one._id === id) {
          return task;
        }
        return one;
      });
      addToStorage(tasks);
      return { tasks };
    });
