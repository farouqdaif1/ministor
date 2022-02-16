import React from 'react'
import { CartStyle, Line, CartContainer, CHeader } from '../Styles/Cart.style';
import Item from './Item/Item';
const Cart = ({ cart,addToCart,onRemove,showMoney }) => {
    return (
        <CartContainer>
            <CartStyle>
                <CHeader>CART</CHeader>
                <Line />
                {cart.length === 0 && (<div>Cart is Empty</div>)}
                {
                    cart.map(element => (
                        <Item showMoney={showMoney} addToCart={addToCart} onRemove={onRemove}element={element} key={element.id} />
                    ))
                }
            </CartStyle>
    </CartContainer>
)
}
export default Cart
