import React from 'react'
import {
    Background, PopupStyle, Item, ImageStyle, InfoStyle, Pra, Money, PLus, PusX, ScrollContainer,
    CartLink, ButtonLink, ButtonLink1,Buttons,Total,Title,Bold,Attr
} from '../Styles/Popup.style'
const Popup = ({ showModal, cart, addToCart, onRemove ,showMoney }) => {
    const total = cart.reduce((a, c) => a + c.prices[showMoney].amount * c.qty, 0);
    return (
        (showModal) && (
    <Background>
        <div>
            <PopupStyle >
                        {cart.length === 0 && (<div>Cart is Empty</div>)}
                        <Title ><Bold >My Bag</Bold>,{cart.length} items</Title>
                        <ScrollContainer  >
                {
                                cart.map(element => (
                        <div key={element.id}>
                    <Item>
                        <InfoStyle>
                            <Pra>{element.brand}</Pra>
                            <Pra>{element.name}</Pra>
                                                <Money> {element.prices[showMoney].currency.symbol}{element.prices[showMoney].amount} </Money> 
                                                <Attr>{element.specification }</Attr>                      
                        </InfoStyle>
                        <ImageStyle>
                            <PusX>
                                <PLus onClick={()=>addToCart(element)}>+</PLus>
                                {element.qty }
                                <PLus onClick={()=>onRemove(element)}>-</PLus>
                            </PusX>
                            <img src={element.gallery[0]} alt={element.name} width="105px" height="137px" />
                        </ImageStyle>
                    </Item>
                        </div>
                    ))
                }
                    </ScrollContainer>
                    {
                        (cart.length > 0) && (
                        <>
                            <Total>
                                <p>Total</p>
                                <p>{cart[0].prices[showMoney].currency.symbol}{total.toFixed(2)}</p>
                            </Total>
                            <Buttons>
                                <ButtonLink>
                                    <CartLink to="/cart">View bag</CartLink>
                                </ButtonLink>
                                <ButtonLink1>CHECK OUT</ButtonLink1>
                            </Buttons>
                        </>
                        )
                        }
            </PopupStyle>
        </div>
    </Background>
)
)
}

export default Popup
