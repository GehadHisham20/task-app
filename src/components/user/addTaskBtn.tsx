import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { FloatButton, notification } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import TaskForm from './TaskForm';
import { ITask } from 'types/task';
import { useStore } from 'store/store';
import { TState } from 'store/types';

export default function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTask = useStore((state) => (state as TState).addTask);

  const onCreate = (values: ITask) => {
    const newValues: ITask = { ...values };
    newValues.date = new Date(newValues.date).toISOString();
    newValues._id = uuidv4();
    addTask(newValues);
    setIsModalOpen(false);
    notification.success({
      message: 'Success',
      description: 'Task added sucessfully',
    });
  };
  return (
    <>
      <FloatButton
        type="primary"
        icon={<PlusOutlined />}
        tooltip={<span>Add task</span>}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <TaskForm
          visible={isModalOpen}
          onFinish={onCreate}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          title="Create a new task"
          okText="Create"
        />
      )}
    </>
  );
}
