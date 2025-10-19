import React from 'react';

const AdminFooter = () => (
  <footer style={{
    background: '#f4f6fb',
    color: '#2d3e50',
    padding: '1rem 2rem',
    textAlign: 'center',
    fontWeight: 500,
    letterSpacing: 1,
    marginTop: '2rem'
  }}>
    &copy; {new Date().getFullYear()} ShopPro Admin Portal. All rights reserved.
  </footer>
);

export default AdminFooter;