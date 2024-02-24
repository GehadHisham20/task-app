import React from 'react';
import { Modal, Form, Input, DatePicker, Select } from 'antd';
import { Dayjs } from 'dayjs';

import { ITask } from 'types/task';

interface AddTaskFormProps {
  visible: boolean;
  onCancel: () => void;
  onFinish: (values: ITask) => void;
  title: string;
  okText: string;
  initialValues?: ITask<Dayjs> | Omit<ITask, '_id'>;
}
const initialValue = {
  date: '',
  title: '',
  description: '',
  status: '',
};
const options = [
  { label: 'Not Started', value: 'Not Started' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Finished', value: 'Finished' },
];
export default function TaskForm({
  visible,
  onCancel,
  onFinish,
  title,
  okText,
  initialValues = initialValue,
}: AddTaskFormProps) {
  const [form] = Form.useForm();
  return (
    <Modal
      open={visible}
      title={title}
      okText={okText}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onFinish(values);
            form.resetFields();
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        initialValues={initialValues}
        form={form}
        layout="vertical"
        name={title}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Please input the title of the task!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input the description of the task!',
            },
          ]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: 'Please input the time of the task!',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
              message: 'Please input the status of the task!',
            },
          ]}
        >
          <Select style={{ width: '100%' }} options={options} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
