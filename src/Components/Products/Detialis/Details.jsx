import React from 'react'
import {Photo,Bar,DetailsStyle,Image,Shop,Title,SubTitle,Size,Box,Buttons,Price,Add}from '../../Styles/Details.style'
const Details = ({ product, showMoney, addToCart }) => {
    let xv =[];
    return (
        <DetailsStyle>
            <Photo>
                <Bar>
                {
                    product.gallery.map((image,index) => (
                        <img key={index }src={product.gallery[index]} alt={product.name} width="60px" height="60px"/>
                    ))
                    }  
                </Bar>    
                <Image>
                <img src={product.gallery[0]} alt={product.name}  height="500px" />    
                </Image>
            </Photo>
            <Shop>
                <Title>{product.brand}</Title>
                <SubTitle>{product.name}</SubTitle>
                {(product.attributes.length !== 0) && (
                    product.attributes.map((attribute, index) => (
                        <div key={index}>
                            <Size>{product.attributes[index].name}</Size>
                            <Buttons>
                                {
                                    product.attributes[index].items.map((x, z) => (
                                        product.attributes[index].type === "text" ? <Box onClick={() => {xv.push(x.value)  }} key={z}>{x.value}</Box>:<Box style={{backgroundColor:`${x.value}` }} onClick={() => { xv.push(x.value)   }} key={z}></Box>
                                    ))
                                    }
                            </Buttons>
                        </div>
                    )))}
                <Size>PRICE:</Size>
                <Price> {product.prices[showMoney].currency.symbol}{product.prices[showMoney].amount}</Price>
                <Add onClick={() => { addToCart(product,xv) }}>ADD TO CART</Add>
                <div dangerouslySetInnerHTML ={{ __html: product.description}}></div>
                </Shop>
            </DetailsStyle>
    )
}

export default Details;
