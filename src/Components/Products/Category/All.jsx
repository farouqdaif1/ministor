import React from 'react';
import Product from './Product/Product';
import { Container, Header } from '../../Styles/Container.style';
const All = ({ products,addToCart,showMoney }) => {
  return (
    <div>
      <Header>{products.name.charAt(0).toUpperCase() + products.name.slice(1)}</Header>
      <Container>
      {
        products.products.map((product) => (
            <Product addToCart={addToCart } showMoney={showMoney} product={product} key={product.id} />
        ))
        }
      </Container>

      
    </div>
  )
}

export default All
