export interface ITask<T = string> {
  _id: string;
  title: string;
  description: string;
  date: T;
  status: string;
}
