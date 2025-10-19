import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

const AdminPortal = ({ token, onLogout }) => {
  const [form, setForm] = useState({
    id: '',
    name: '',
    category: '',
    brand: '',
    price: '',
    stock: '',
    description: '',
    image: null
  });
  const [message, setMessage] = useState('');

  if (!token) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)'
      }}>
        <div style={{
          background: '#fff',
          padding: '2rem 2.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          textAlign: 'center',
          color: '#e74c3c',
          fontWeight: 600
        }}>
          Invalid or missing admin token.<br />
          Please login as admin to access this page.
        </div>
      </div>
    );
  }

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm(f => ({ ...f, image: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach(key => {
      if (form[key]) data.append(key, form[key]);
    });
    try {
      await axios.post('http://localhost:5000/api/products/admin', data, {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
      });
      setMessage('Product added!');
      setForm({
        id: '',
        name: '',
        category: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
        image: null
      });
    } catch {
      setMessage('Error adding product');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' }}>
      <AdminHeader onLogout={onLogout} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 120px)'
      }}>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          style={{
            background: '#fff',
            padding: '2rem 2.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 340
          }}
        >
          <h2 style={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: '#2d3e50',
            fontWeight: 700,
            letterSpacing: 1
          }}>Add Product</h2>
          <input
            name="id"
            type="number"
            placeholder="ID"
            value={form.id}
            onChange={handleChange}
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
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
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
            name="category"
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
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
            name="brand"
            type="text"
            placeholder="Brand"
            value={form.brand}
            onChange={handleChange}
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
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
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
            name="stock"
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            required
            style={{
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #bfc9d9',
              fontSize: '1rem'
            }}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            style={{
              marginBottom: '1rem',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #bfc9d9',
              fontSize: '1rem',
              minHeight: '80px'
            }}
          />
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
            style={{
              marginBottom: '1rem',
              padding: '0.5rem 0',
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
            Add Product
          </button>
          {message && (
            <div style={{
              color: message === 'Product added!' ? '#27ae60' : '#e74c3c',
              textAlign: 'center',
              marginTop: '0.5rem',
              fontWeight: 500
            }}>
              {message}
            </div>
          )}
        </form>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminPortal;