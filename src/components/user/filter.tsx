import React, { SetStateAction, Dispatch } from 'react';
import { Select } from 'antd';

const options = [
  { label: 'All', value: null },
  { label: 'Not Started', value: 'Not Started' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Finished', value: 'Finished' },
];
interface ITaskFilterProps {
  setSelectedStatus: Dispatch<SetStateAction<string | null>>;
}
export default function TasksFilter({ setSelectedStatus }: ITaskFilterProps) {
  return (
    <Select
      title="Filter by status"
      placeholder="Filter by status"
      style={{ width: '100%' }}
      options={options}
      onChange={(value) => setSelectedStatus(value)}
    />
  );
}
