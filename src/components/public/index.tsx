import { Button, Row, Col } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import {
  Route,
  Link,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import LoginPage from './login';
import Home from './home';
import { isAuthenticated } from 'utils/index';
import { removeFromStorage } from 'utils/storage/removeFromStorage';
const headerStyle: React.CSSProperties = {
  color: '#fff',
  height: 64,
  width: '100%',
};
export default function PublicPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  function Logout() {
    removeFromStorage('user');
    navigate('/');
  }
  return (
    <Row style={{ maxWidth: '100%' }} justify={'center'}>
      <Header style={headerStyle}>
        <Row
          gutter={[16, 16]}
          justify={'end'}
          align={'middle'}
          style={{ height: '100%' }}
        >
          <Col>
            {currentPath === '/' && isAuthenticated() && (
              <Button>
                <Link to="/user">Tasks</Link>
              </Button>
            )}
          </Col>
          <Col>
            {currentPath === '/' && !isAuthenticated() && (
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </Col>
          <Col>
            {currentPath === '/login' && (
              <Button>
                <Link to="/">Home</Link>
              </Button>
            )}
          </Col>

          <Col>
            {isAuthenticated() && <Button onClick={Logout}>Logout</Button>}
          </Col>
        </Row>
      </Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Row>
  );
}
