import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import './App.css';
import UserPage from 'components/user/index';
import PublicPage from 'components/public';
import UserProtectedRoute from 'routes/userProtectedRoute';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#272d3d',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicPage />} />
          <Route
            path="/user"
            element={
              <UserProtectedRoute>
                <UserPage />
              </UserProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
