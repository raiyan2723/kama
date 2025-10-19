import React, { useState } from 'react';
import Home from './Home';
import AdminLogin from './pages/AdminLogin';
import AdminPortal from './pages/AdminPortal';

function App() {
  const [adminToken, setAdminToken] = useState('');
  const [route, setRoute] = useState('home');

  const handleLogout = () => {
    setAdminToken('');
    setRoute('home');
  };

  if (route === 'admin-login') {
    return (
      <AdminLogin
        onLogin={token => {
          setAdminToken(token);
          setRoute('admin-portal');
        }}
      />
    );
  }

  if (route === 'admin-portal') {
    return <AdminPortal token={adminToken} onLogout={handleLogout} />;
  }

  return (
    <Home onAdminClick={() => setRoute('admin-login')} />
  );
}

export default App;