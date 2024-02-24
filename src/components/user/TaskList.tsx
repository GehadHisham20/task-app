import React, { useEffect, useState } from 'react';
import { Row, Col, Space, Button } from 'antd';

import TaskCard from './TaskCard';
import { ITask } from 'types/task';
import TasksPagaination from './Pagaination';
import { useStore } from 'store/store';
import { TState } from 'store/types';
import TasksFilter from './filter';

const tasksPerPage = 2; // Number of tasks per page
export default function TaskList() {
  const [displayed, setDisplayed] = useState<ITask[]>([]); // State for displayed data
  const [currentPage, setCurrentPage] = useState(1); // State for selected Page
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null); // State for selected status filter
  const [sortByDateAsc, setSortByDateAsc] = useState(true); // State for sorting by date

  const tasks = useStore((state) => (state as TState).tasks);

  // Filter and sort tasks
  useEffect(() => {
    let filteredTasks = [...tasks];

    console.log(selectedStatus);
    //filter
    if (selectedStatus) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === selectedStatus
      );
    }
    //sort
    filteredTasks = filteredTasks.sort((a: ITask, b: ITask) => {
      if (sortByDateAsc) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
    console.log(filteredTasks);

    setDisplayed(filteredTasks);
  }, [tasks, selectedStatus, sortByDateAsc]);

  // Calculate the start and end index of tasks for the current page
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = Math.min(startIndex + tasksPerPage, displayed.length);

  // Slice the tasks array to display only the tasks for the current page
  const tasksForCurrentPage = displayed.slice(startIndex, endIndex);
  console.log(
    tasksForCurrentPage,
    startIndex,
    endIndex,
    displayed,
    currentPage
  );
  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to toggle sorting by date
  const toggleSortByDate = () => {
    setSortByDateAsc((prev) => !prev);
  };
  return (
    <Space
      direction="vertical"
      size={'large'}
      style={{
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Space
        style={{
          width: '100%',
        }}
      >
        <TasksFilter setSelectedStatus={setSelectedStatus} />
        <Button onClick={toggleSortByDate}>
          Sort {!sortByDateAsc ? 'Asc' : 'Desc'}
        </Button>
      </Space>

      <Row gutter={[16, 16]} justify={'space-evenly'} style={{ width: '100%' }}>
        {tasksForCurrentPage.map((task: ITask) => {
          return (
            <Col key={task._id} className="gutter-row" md={12} sm={24}>
              <TaskCard task={task} />
            </Col>
          );
        })}
      </Row>

      <TasksPagaination
        handlePageChange={handlePageChange}
        totalPages={displayed.length}
        tasksPerPage={tasksPerPage}
        currentPage={currentPage}
      />
    </Space>
  );
}
