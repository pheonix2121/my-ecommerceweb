import React from 'react';
import { useNavigate } from 'react-router-dom';

const DummyProducts = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

 
const ProductList = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    navigate('/ProductDetail', { state: { product } });
  };

  const list = DummyProducts.map((product, index) => (
    <div key={index}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.imageUrl} alt="pro-photos" />
      <img
        src={product.imageUrl}
        alt="pro-photos"
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        onClick={() => handleImageClick(product)}
      />
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  ));
  return <div>{list}</div>;
};

export default ProductList;