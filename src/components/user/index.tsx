import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Space, Typography, Button, Row, Col } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import TaskList from './TaskList';
import AddTaskBtn from './addTaskBtn';
import { isAuthenticated } from 'utils/index';
import { removeFromStorage } from 'utils/storage/removeFromStorage';

const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  width: '100%',
};
export default function Index() {
  const navigate = useNavigate();
  function Logout() {
    removeFromStorage('user');
    navigate('/');
  }
  return (
    <Row style={{ maxWidth: '100%' }}>
      <Header style={headerStyle}>
        <Row
          gutter={[16, 16]}
          justify={'end'}
          align={'middle'}
          style={{ height: '100%' }}
        >
          <Col>
            <Button>
              <Link to="/">Home</Link>
            </Button>
          </Col>

          <Col>
            {isAuthenticated() && <Button onClick={Logout}>Logout</Button>}
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '1em 3em' }}>
        <Space direction="vertical" style={{ width: '100%' }} size={'large'}>
          <Typography.Title style={{ textAlign: 'center' }}>
            Tasks
          </Typography.Title>
          <TaskList />
        </Space>

        <AddTaskBtn />
      </Content>
    </Row>
  );
}
