import { Row, Typography } from 'antd';
import React from 'react';

export default function Home() {
  return (
    <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
      <Typography.Title level={1}>Organize your Tasks</Typography.Title>
    </Row>
  );
}
