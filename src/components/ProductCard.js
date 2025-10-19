import React from 'react';

const ProductCard = ({ product, cart, onAddToCart }) => {
  const cartItem = cart.find(item => item.id === product.id);
  const currentQty = cartItem ? cartItem.quantity : 0;
  const isSoldOut = product.stock === 0 || currentQty >= product.stock;

  return (
    <div className="car-card">
      <div className="car-image">
        <img src={`http://localhost:5000${product.image}`} alt={product.name} />
        <div className="car-type">{product.category}</div>
      </div>
      <div className="car-details">
        <h3>{product.name}</h3>
        <div className="car-specs">
          <span>{product.brand}</span>
          <span>
            {product.stock > 0
              ? `In Stock (${product.stock})`
              : <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Sold Out</span>
            }
          </span>
        </div>
        <p className="car-description">{product.description}</p>
        <div className="car-footer">
          <div className="car-price">
            <span className="price">${product.price}</span>
            <span className="price-unit">€</span>
            <span className="discount">20% OFF</span>
          </div>
          <button
            className="btn-primary"
            onClick={() => onAddToCart(product)}
            disabled={isSoldOut}
            style={isSoldOut ? { background: '#ccc', cursor: 'not-allowed' } : {}}
          >
            {isSoldOut ? 'Sold Out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;