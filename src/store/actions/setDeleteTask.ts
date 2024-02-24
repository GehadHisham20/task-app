import { addToStorage } from 'utils/storage/addToStorage';
import { ITask } from 'types/task';
import { TSet, TState } from './../types';

/**
 * Deletes a task from the state based on the given ID.
 *
 * @param set - The function used to update the state.
 * @param id - The ID of the task to be deleted.
 */
export default (set: TSet) => (id: string) => {
  set((state: TState) => {
    const filterdTasks: ITask[] = state.tasks.filter((one) => one._id !== id);
    addToStorage(filterdTasks);
    return {
      tasks: filterdTasks,
    };
  });
};
