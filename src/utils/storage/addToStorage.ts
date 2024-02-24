import { ITask } from 'types/task';

/**
 * Adds a task to the local storage.
 *
 * @param {ITask[] | string} data - The task or user data to be added to the local storage.
 * @param {string} [key='tasks'] - The key under which the data will be stored in the local storage.
 * @returns {void}
 */
export function addToStorage(
  data: ITask[] | string,
  key: string = 'tasks'
): void {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
}
