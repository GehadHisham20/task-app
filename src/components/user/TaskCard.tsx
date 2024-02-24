import React, { useState } from 'react';
import { Card, Row, Col, Tag, Typography, Popover } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import { ITask } from 'types/task';
import { useStore } from 'store/store';
import { TState } from 'store/types';
import TaskForm from './TaskForm';
import dayjs from 'dayjs';

interface ITaskCardProps {
  task: ITask;
}

function getColor(status: string) {
  switch (status) {
    case 'Not Started':
      return 'red';
    case 'In Progress':
      return 'orange';
    case 'Finished':
      return 'green';
    default:
      break;
  }
}
export default function TaskCard({ task }: ITaskCardProps) {
  const deleteTask = useStore((state) => (state as TState).deleteTask);
  const editTask = useStore((state) => (state as TState).editTask);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onEdit(values: ITask) {
    const newValues: ITask = { ...values };
    newValues.date = new Date(newValues.date).toISOString();
    editTask(task._id, newValues);
    setIsModalOpen(false);
  }
  return (
    <>
      <Card
        title={task.title}
        bordered={false}
        hoverable
        actions={[
          <Popover content={task.description} title="" placement="top">
            <EyeOutlined key="view" />{' '}
          </Popover>,
          <EditOutlined key="edit" onClick={() => setIsModalOpen(true)} />,
          <DeleteOutlined
            key="delete"
            style={{ color: 'red' }}
            onClick={() => deleteTask(task._id)}
          />,
        ]}
        style={{ width: '100%', margin: 'auto' }}
        styles={{
          header: { backgroundColor: '#272d3d', color: '#fff' },
        }}
      >
        <Typography.Paragraph>
          {task.description.length > 150
            ? task.description.substring(0, 150) + ' ...'
            : task.description}
        </Typography.Paragraph>
        <Row justify={'space-between'} style={{ paddingTop: '1em' }}>
          <Col>
            {' '}
            <Tag color={getColor(task.status)}> {task.status}</Tag>{' '}
          </Col>
          <Col>
            {' '}
            <Tag icon={<FieldTimeOutlined />}>
              {dayjs(task.date).format('YYYY-MM-DD')}
            </Tag>{' '}
          </Col>
        </Row>
      </Card>
      {isModalOpen && (
        <TaskForm
          visible={isModalOpen}
          onFinish={onEdit}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          title="Edit task"
          okText="Edit"
          initialValues={{ ...task, date: dayjs(task.date) }}
        />
      )}
    </>
  );
}
