import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/productDetails/${index}`}>
        <img
          src={product.imageUrl}
          alt="pro-photos"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  ));


  return (
    <div>
      <div></div>
      {list}
    </div>
  );
};

export default ProductList;