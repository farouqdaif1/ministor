import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Card, CardN, CardP, CardOutOfStocks, ShoppingCart,LinkCard } from '../../../Styles/Card.style'

const Product = ({ product, addToCart, showMoney }) => {
  // console.log( product)

  const MyCard = product.inStock ? Card : CardOutOfStocks;
  return (
    <MyCard>
      <LinkCard to={`/${product.id}`}>
        <img src={product.gallery[0]} alt={product.name} width="354px" height="330px" />
        </LinkCard>

        <CardN>{product.name}</CardN> 
      {product.attributes.length > 0 ?
        <ShoppingCart onClick={() => { addToCart(product, product.attributes[0].items[0].value) }}>
          <FiShoppingCart />
        </ShoppingCart> :
        <ShoppingCart onClick={() => { addToCart(product) }}>
          <FiShoppingCart />
        </ShoppingCart>}
      
      <CardP> { product.prices[showMoney].currency.symbol }{ product.prices[showMoney].amount } </CardP>
      </MyCard>
  )
}

export default Product
