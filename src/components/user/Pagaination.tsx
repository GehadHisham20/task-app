import React from 'react';
import { Pagination } from 'antd';

interface ITaskPaginationProps {
  currentPage: number;
  totalPages: number;
  tasksPerPage: number;
  handlePageChange: (value: number) => void;
}
export default function TasksPagaination({
  totalPages,
  handlePageChange,
  currentPage,
  tasksPerPage,
}: ITaskPaginationProps) {
  return (
    <Pagination
      current={currentPage}
      onChange={handlePageChange}
      total={totalPages}
      pageSize={tasksPerPage}
      showSizeChanger={false}
      showQuickJumper={false}
      showTotal={(total) => `Total ${total} tasks`}
    />
  );
}
