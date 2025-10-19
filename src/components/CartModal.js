import React from 'react';

const CartModal = ({ cart, isOpen, onClose, onAdd, onMinus }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx} style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <strong>{item.name}</strong> - ${item.price}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <button
                      className="btn-secondary"
                      style={{
                        width: 28,
                        height: 28,
                        fontSize: 18,
                        marginRight: 4,
                        background: item.quantity === 1 ? '#e74c3c' : undefined
                      }}
                      onClick={() => onMinus(item)}
                    >−</button>
                    <span style={{ margin: '0 8px', minWidth: 24, textAlign: 'center' }}>{item.quantity}</span>
                    <button
                      className="btn-secondary"
                      style={{ width: 28, height: 28, fontSize: 18, marginLeft: 4 }}
                      onClick={() => onAdd(item)}
                      disabled={item.quantity >= item.stock}
                    >+</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-footer">
          <div style={{ fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</div>
          <button className="btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;