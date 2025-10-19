import React from 'react';

const AdminHeader = ({ onLogout }) => (
  <header style={{
    background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <h2 style={{ margin: 0, fontWeight: 700 }}>Admin Portal</h2>
    <button
      onClick={onLogout}
      style={{
        background: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        padding: '0.5rem 1.2rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer'
      }}
    >
      Logout
    </button>
  </header>
);

export default AdminHeader;