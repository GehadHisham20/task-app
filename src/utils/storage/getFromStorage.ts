import { ITask } from 'types/task';

/**
 * Retrieves data from the storage.
 *
 * @returns The data retrieved from the storage, or an empty array if no data is found.
 */
export function getFromStorage(key: string = 'tasks'): ITask[] | string {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}
