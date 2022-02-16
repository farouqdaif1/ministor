import React from 'react'
import {  Box, Brand, Line, Photo,Control, ItemStyle ,PName,Price,Info,Attr} from '../../Styles/Cart.style';

const Item = ({ element, addToCart, onRemove, showMoney }) => {
  console.log(element.specification)
  return (
      <div>
        <ItemStyle>
            <Info>
            <Brand>{element.brand}</Brand>
              <PName>{element.name}</PName>
              <Price> {element.prices[showMoney].currency.symbol}{element.prices[showMoney].amount} </Price> 
              <Attr>{element.specification}</Attr>
            </Info>
        <Photo>
        <Control>
              <Box onClick={()=>addToCart(element)}>+</Box>
              <div>{element.qty }</div>
              <Box onClick={()=>onRemove(element)}>-</Box>
        </Control>
              <img src={element.gallery[0]} alt={element.name} width="141px" height="185px" />
        </Photo>
        </ItemStyle>
      <Line />
    </div>
  )
}

export default Item
