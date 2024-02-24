import React, { SetStateAction, Dispatch } from 'react';
import { Select } from 'antd';

const options = [
  { label: 'Asc', value: 'Asc' },
  { label: 'Desc', value: 'Desc' },
];
interface ITasksSortProps {
  setSortByDateAsc: Dispatch<SetStateAction<boolean>>;
}
export default function TasksSort({ setSortByDateAsc }: ITasksSortProps) {
  return (
    <Select
      title="Filter by status"
      placeholder="Filter by status"
      style={{ width: '100%' }}
      options={options}
      onChange={(value) => setSortByDateAsc(value === 'Asc')}
    />
  );
}
