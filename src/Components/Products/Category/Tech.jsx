import React from 'react';
import Product from './Product/Product';
import { Container, Header } from '../../Styles/Container.style';
const Tech = ({ products,addToCart,showMoney }) => {
return (
    <div>
    <Header>{products.name.charAt(0).toUpperCase() + products.name.slice(1)}</Header>
        <Container>
        {
            products.products.map((product) => (
                <Product showMoney={showMoney} addToCart={addToCart } product={product} key={product.id} />
            ))
            }
        </Container>
    </div>
)
}

export default Tech;