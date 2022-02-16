import styled from 'styled-components';
import { Link } from "react-router-dom";

export const CardOutOfStocks = styled.div`
width: 386px;
padding: 16px;
position: relative;
background: #FFFFFF;

&:before{
    content:'OUT OF STOCK';
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0px;
    text-align: left;
    color: black;
    position:relative;
    top:50%;
    left: 25%;
}
opacity: 0.5;
`
export const CardN = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 29px;
letter-spacing: 0px;
text-align: left;
`
export const CardP = styled.p`
font-family: 'Raleway', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
`
export const ShoppingCart = styled.div`
height: 52px;
width: 52px;
border-radius:50%;
justify-content:center;
align-items:center;
background: #5ECE7B;
color: white;
position: absolute;
z-index:5;
bottom:15%;
left:80%;
cursor: pointer;

display: none;
`
export const Card = styled.div`
width: 386px;
padding: 16px;
position: relative;
cursor: pointer;
&:hover{
    transform: scale(1.1);
}
&:hover ${ShoppingCart} {
    display: flex;
    }

`
export const LinkCard = styled(Link)`
text-decoration:none;
color:black;

`