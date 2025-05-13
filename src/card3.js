import React from 'react';
import ProductCard from './productCard';


const Card3 = () => {
  return (
    
    <div style={{ display: 'flex',flexWrap:'wrap' }} >
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/OIP.cUP5TAIVtHy6cfZuljWyEwHaHa?w=626&h=626&rs=1&pid=ImgDetMain"
        
        title="Cool Headphones"
        price="$59.99"
      />
    </div>
    </div>
  );
};

export default Card3;