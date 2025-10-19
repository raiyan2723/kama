import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', { username, password });
      if (res.data.success) {
        onLogin(res.data.token);
      } else {
        setError('Login failed');
      }
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="admin-login" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 320
        }}
      >
        <h2 style={{
          marginBottom: '1.5rem',
          textAlign: 'center',
          color: '#2d3e50',
          fontWeight: 700,
          letterSpacing: 1
        }}>Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #bfc9d9',
            fontSize: '1rem'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            marginBottom: '1rem',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #bfc9d9',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '0.5rem',
            boxShadow: '0 2px 8px rgba(78,84,200,0.10)'
          }}
        >
          Login
        </button>
        {error && (
          <div style={{
            color: '#e74c3c',
            textAlign: 'center',
            marginTop: '0.5rem',
            fontWeight: 500
          }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;